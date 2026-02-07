// ========================================
// RETELL AI BACKEND SERVER
// ========================================
// Secure backend to generate access tokens for web calls
// NEVER expose API keys to frontend

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Retell from 'retell-sdk';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ========================================
// MIDDLEWARE
// ========================================
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// ========================================
// INITIALIZE RETELL CLIENT
// ========================================
const retellClient = new Retell({
  apiKey: process.env.RETELL_API_KEY,
});

// Validate API key on startup
if (!process.env.RETELL_API_KEY) {
  console.error('❌ ERROR: RETELL_API_KEY is not set in environment variables');
  process.exit(1);
}

// ========================================
// AGENT CONFIGURATIONS
// ========================================
const VALID_AGENTS = {
  'syvairo': 'agent_3117f9828329d5087d96f07d42',
  'warba': 'agent_d22bf0489facf47a450a20ec29'
};

// ========================================
// API ENDPOINTS
// ========================================

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Retell AI Voice Server'
  });
});

/**
 * Create Web Call Endpoint
 * Returns access token for frontend to start call
 *
 * @route POST /api/create-web-call
 * @body {string} agentId - The agent identifier (syvairo or warba)
 * @returns {object} { access_token, call_id, agent_id }
 */
app.post('/api/create-web-call', async (req, res) => {
  try {
    const { agentId } = req.body;

    // Validate agentId
    if (!agentId || !VALID_AGENTS[agentId]) {
      return res.status(400).json({
        error: 'Invalid agent ID',
        message: 'Agent ID must be either "syvairo" or "warba"',
        validAgents: Object.keys(VALID_AGENTS)
      });
    }

    const actualAgentId = VALID_AGENTS[agentId];

    console.log(`🎯 Creating web call for agent: ${agentId} (${actualAgentId})`);

    // Create web call using Retell SDK
    const webCallResponse = await retellClient.call.createWebCall({
      agent_id: actualAgentId,
    });

    console.log(`✅ Web call created successfully:`, {
      call_id: webCallResponse.call_id,
      access_token: webCallResponse.access_token ? '***' : 'missing'
    });

    // Return access token to frontend
    res.json({
      access_token: webCallResponse.access_token,
      call_id: webCallResponse.call_id,
      agent_id: actualAgentId,
      agent_name: agentId
    });

  } catch (error) {
    console.error('❌ Error creating web call:', error);

    // Handle specific Retell API errors
    if (error.status) {
      return res.status(error.status).json({
        error: 'Retell API Error',
        message: error.message || 'Failed to create web call',
        details: error.body || {}
      });
    }

    // Handle general errors
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to create web call',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * Get Agent Information
 * Optional endpoint to retrieve agent details
 *
 * @route GET /api/agents
 * @returns {object} Available agents
 */
app.get('/api/agents', (req, res) => {
  res.json({
    agents: [
      {
        id: 'syvairo',
        name: 'Syvairo AI Agent',
        description: 'AI automation and business solutions expert',
        agent_id: VALID_AGENTS.syvairo
      },
      {
        id: 'warba',
        name: 'Warba Insurance Agent',
        description: 'Insurance products and services specialist',
        agent_id: VALID_AGENTS.warba
      }
    ]
  });
});

// ========================================
// ERROR HANDLING
// ========================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('💥 Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// ========================================
// START SERVER
// ========================================
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 ========================================');
  console.log('   RETELL AI VOICE SERVER STARTED');
  console.log('   ========================================');
  console.log(`   📡 Server running on port: ${PORT}`);
  console.log(`   🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`   🔑 API Key configured: ${process.env.RETELL_API_KEY ? '✅' : '❌'}`);
  console.log(`   🤖 Available agents: ${Object.keys(VALID_AGENTS).join(', ')}`);
  console.log('   ========================================');
  console.log('');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...');
  process.exit(0);
});
