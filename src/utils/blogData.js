export const blogPosts = [
  {
    id: 1,
    slug: 'building-rex-47-kinematic-engine',
    title: 'Building the REX-47 Kinematic Engine',
    date: 'Oct 24, 2026',
    author: 'Engineering Lead',
    category: 'Engineering',
    readTime: '8 min',
    featured: true,
    excerpt: 'A deep dive into how we calculate inverse kinematics for a 6-DOF robotic arm with sub-millimeter precision using local edge compute.',
    coverImage: '/images/blog/kinematics.png',
    content: [
      { type: 'paragraph', text: 'The REX-47 Kinematic Engine represents a significant leap forward in local processing for complex robotic arms. Traditionally, calculating inverse kinematics (IK) for a 6 Degree-of-Freedom (DOF) arm required offloading the matrix math to an external server or accepting significant latency and low precision.' },
      { type: 'paragraph', text: 'With REX-47, we developed a highly optimized, hardware-accelerated IK solver that runs directly on the edge processing unit. By leveraging specialized tensor cores and writing our solver in low-level Rust, we achieved a calculation speed of under 2 milliseconds.' },
      { type: 'paragraph', text: 'This allows REX-47 to intercept dynamic, real-time object tracking coordinates from the Vision AI service and adjust its end-effector position seamlessly, correcting its trajectory mid-flight.' },
      { type: 'heading', level: 2, text: 'Key Achievements' },
      { type: 'paragraph', text: '• Sub-millimeter precision across a 1.2-meter radius workspace.\n• 500Hz control loop frequency.\n• Dynamic singularity avoidance without erratic joint velocities.' }
    ]
  },
  {
    id: 2,
    slug: 'optimizing-yolov8-edge-devices',
    title: 'Optimizing YOLOv8 for Edge Devices',
    date: 'Oct 12, 2026',
    author: 'AI Vision Team',
    category: 'AI / Vision',
    readTime: '5 min',
    featured: false,
    excerpt: 'Running computer vision models on constrained hardware without sacrificing frame rate or accuracy.',
    coverImage: '/images/blog/vision.png',
    content: [
      { type: 'paragraph', text: 'Deploying state-of-the-art computer vision models like YOLOv8 on mobile robotics platforms poses a massive challenge: balancing accuracy with power consumption and thermal limits.' },
      { type: 'paragraph', text: 'Our approach involved aggressive quantization—reducing the 32-bit floating-point weights down to INT8—combined with layer fusion and hardware-specific compilation using TensorRT.' },
      { type: 'paragraph', text: 'By strategically pruning the neural network and utilizing the robot\'s onboard NPU (Neural Processing Unit), we managed to maintain an mAP (mean Average Precision) drop of less than 1.5% while boosting inference speeds from 15 FPS to a blistering 60 FPS.' },
      { type: 'paragraph', text: 'This high framerate is critical for REX-47\'s autonomous navigation, allowing it to detect fast-moving obstacles and make split-second pathfinding decisions in complex, dynamic environments.' }
    ]
  },
  {
    id: 3,
    slug: 'zero-trust-architecture-robotics',
    title: 'Zero-Trust Architecture in Robotics',
    date: 'Sep 28, 2026',
    author: 'Security Lead',
    category: 'Security',
    readTime: '6 min',
    featured: false,
    excerpt: 'Why securing the communication layer between the operator dashboard and the hardware is critical for modern deployments.',
    coverImage: '/images/blog/security.png',
    content: [
      { type: 'paragraph', text: 'Robotics security has historically relied on perimeter defense: assuming that if a device is on the local network, it is safe. In the era of cloud-connected, autonomous agents, this assumption is dangerously obsolete.' },
      { type: 'paragraph', text: 'REX-47 implements a strict Zero-Trust Architecture from the ground up. Every microservice, from the Motor Controller to the Vision AI, must explicitly authenticate itself using mutually authenticated TLS (mTLS) certificates.' },
      { type: 'paragraph', text: 'Furthermore, we instituted granular Role-Based Access Control (RBAC) at the hardware level. For instance, the Telemetry Service can read sensor data, but it cannot issue motor commands. Only the authenticated Navigation Engine holds that specific cryptographic token.' },
      { type: 'heading', level: 2, text: 'Security Pillars' },
      { type: 'paragraph', text: '• End-to-end payload encryption.\n• Ephemeral, short-lived tokens for session management.\n• Hardware-backed Root of Trust (TPM module) securing the boot process.' }
    ]
  },
  {
    id: 4,
    slug: 'role-llms-autonomous-agents',
    title: 'The Role of LLMs in Autonomous Agents',
    date: 'Sep 15, 2026',
    author: 'Agentic AI Team',
    category: 'AI / LLM',
    readTime: '10 min',
    featured: false,
    excerpt: 'Exploring how natural language processing changes the paradigm of robot programming and task execution.',
    coverImage: '/images/blog/llm.png',
    content: [
      { type: 'paragraph', text: 'The days of rigidly programming robots via code or proprietary GUI tools are ending. REX-47 incorporates a lightweight, locally-running Large Language Model (LLM) to bridge the gap between human intent and robotic action.' },
      { type: 'paragraph', text: 'By giving the LLM context of the robot\'s capabilities (tools, APIs, and current sensor states), we allow the user to issue high-level commands like "Patrol the warehouse and alert me if you see a spill."' },
      { type: 'paragraph', text: 'The LLM decomposes this natural language instruction into a sequence of actionable steps:\n1. Initialize Navigation Engine -> Waypoints: Warehouse Grid.\n2. Initialize Vision AI -> Detect: Liquid, Spill, Hazard.\n3. If (Spill == True) -> Trigger Event Engine -> Notification: Alert User.' },
      { type: 'paragraph', text: 'This semantic understanding transforms REX-47 from a remote-controlled machine into an intelligent, collaborative agent.' }
    ]
  }
];
