export const posts = [
  {
    id: 1,
    slug: '18650-li-ion-battery-guide',
    title: '18650 Li-ion Battery — Rechargeable Lithium-Ion Cell',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '12 min',
    featured: true,
    excerpt: 'An essential engineering guide to 18650 cylindrical lithium-ion cells: their structure, chemistry, configurations, CC-CV charging cycles, BMS integration, and safety rules for robotics.',
    coverImage: '/blog/1-18650/18650.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'An 18650 battery is NOT just a 3.7V battery.\nIt is NOT safe to connect directly to every circuit.\nIt is NOT tolerant of overcharging or deep discharge.'
      },
      {
        type: 'paragraph',
        text: 'An 18650 Li-ion battery is a rechargeable cylindrical lithium-ion cell designed to provide high energy density, stable output voltage, and high discharge capability for portable electronics, robotics, embedded systems, and electric vehicles.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Does "18650" Mean?'
      },
      {
        type: 'paragraph',
        text: "The name 18650 describes the battery's physical dimensions:"
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '18 → 18 mm diameter',
          '65 → 65 mm length',
          '0 → Cylindrical cell'
        ]
      },
      {
        type: 'paragraph',
        text: 'Typical dimensions:\n• Diameter: 18 mm\n• Length: 65 mm\n• Weight: 45–50 g'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Structure'
      },
      {
        type: 'paragraph',
        text: 'An 18650 battery consists of several structural layers stacked and wound together:'
      },
      {
        type: 'image',
        url: '/blog/1-18650/186501.jpeg',
        caption: 'Figure 1: 18650 Battery Internal Structure Layer Diagram'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['Cathode', 'Stores lithium ions during discharge'],
          ['Anode', 'Stores lithium ions during charging'],
          ['Separator', 'Prevents short circuits while allowing ion flow'],
          ['Electrolyte', 'Allows lithium ions to move'],
          ['Safety Vent', 'Releases pressure during failure']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 3. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Typical Value'],
        rows: [
          ['Chemistry', 'Lithium-Ion'],
          ['Nominal Voltage', '3.6–3.7 V'],
          ['Fully Charged Voltage', '4.2 V'],
          ['Cutoff Voltage', '2.5–3.0 V'],
          ['Capacity', '1800–3500 mAh'],
          ['Rechargeable', 'Yes'],
          ['Energy Density', 'High']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Voltage Range Reference'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '4.20V → Fully charged',
          '4.00V → Nearly full',
          '3.70V → Nominal voltage (resting state)',
          '3.50V → Medium charge',
          '3.20V → Low battery',
          '3.00V → Stop using immediately',
          '2.50V → Dangerous over-discharge threshold'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 4. Charging Cycle (CC-CV)'
      },
      {
        type: 'paragraph',
        text: 'Lithium-ion batteries require a precise Constant Current - Constant Voltage (CC-CV) charging profile:'
      },
      {
        type: 'image',
        url: '/blog/1-18650/186502.jpeg',
        caption: 'Figure 2: CC-CV (Constant Current / Constant Voltage) Charging Profile'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Stage 1: Constant Current (CC) - Charger maintains a constant current while the battery voltage rises gradually.',
          'Stage 2: Constant Voltage (CV) - Charger clamps the voltage at 4.20V while current gradually decreases. Charging terminates when the current drops to a very small fraction.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 5. Capacity (mAh) Calculations'
      },
      {
        type: 'paragraph',
        text: 'Capacity indicates how much electrical charge the battery stores, typically measured in milliampere-hours (mAh).'
      },
      {
        type: 'paragraph',
        text: 'Example: A 3000 mAh rating theoretically translates to:\n• 3000 mA output for 1 hour\n• 1500 mA output for 2 hours\n• 1000 mA output for 3 hours'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Runtime Formula'
      },
      {
        type: 'code',
        language: 'text',
        code: 'Runtime (hours) = Battery Capacity (mAh) / Load Current (mA)'
      },
      {
        type: 'paragraph',
        text: 'Example calculation: With a 3000 mAh capacity battery supplying a load current of 600 mA:\n3000 / 600 ≈ 5 hours of runtime.\n(Note: Actual runtime is slightly lower due to converter inefficiencies and discharge rates.)'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 6. Discharge Current'
      },
      {
        type: 'paragraph',
        text: 'Depending on the model, 18650 cells are rated for different maximum continuous discharge currents (e.g., 5A, 10A, 20A, or 30A).'
      },
      {
        type: 'paragraph',
        text: 'A higher discharge rating is essential for:\n• Powering high-draw DC/Servo motors.\n• Supplying steady currents in mobile robotics.\n• Reducing voltage sag under heavy structural loads.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 7. Battery Configurations'
      },
      {
        type: 'paragraph',
        text: 'Multiple cells are combined to meet voltage and capacity needs:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Single Cell (1S): 3.7V nominal output.',
          'Two Cells in Series (2S): 3.7V + 3.7V = 7.4V nominal output.',
          'Three Cells in Series (3S): 3.7V + 3.7V + 3.7V = 11.1V nominal output.',
          'Four Cells in Series (4S): 3.7V + 3.7V + 3.7V + 3.7V = 14.8V nominal output.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔗 8. Series vs Parallel Connections'
      },
      {
        type: 'table',
        headers: ['Connection Type', 'Effect on Voltage', 'Effect on Capacity', 'Example (Using 2x 3000mAh)'],
        rows: [
          ['Series Connection (+ | - + | -)', 'Voltage increases', 'Capacity stays same', '2x 3000mAh yields 7.4V @ 3000mAh'],
          ['Parallel Connection (+ + / - -)', 'Voltage remains same (3.7V)', 'Capacity increases', '2x 3000mAh yields 3.7V @ 6000mAh']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 9. Using 18650 Batteries in Robotics'
      },
      {
        type: 'paragraph',
        text: 'In robotics, raw battery voltage must be managed and regulated before driving sensitive electronics:'
      },
      {
        type: 'image',
        url: '/blog/1-18650/186503.jpeg',
        caption: 'Figure 4: Power Distribution and Regulation System for Robotics'
      },
      {
        type: 'paragraph',
        text: 'Typical Hardware Flow: A 2S Battery Pack (7.4V) runs through a BMS to an LM2596 Buck Converter, stepping down the voltage to 5V to power the ESP32 microcontroller and servo motors.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🛡️ 10. Battery Management System (BMS)'
      },
      {
        type: 'paragraph',
        text: 'A BMS is a critical safety component that continuously monitors the cell parameters.'
      },
      {
        type: 'paragraph',
        text: 'A BMS protects against:\n• Overcharging (stopping charge above 4.2V)\n• Over-discharge (cutting load below 2.5V-3.0V)\n• Overcurrent & Short circuits\n• Cell imbalance (evening out cell voltages)'
      },
      {
        type: 'paragraph',
        text: 'Operating without a BMS risks severe battery damage, fire, and a significantly reduced cell lifespan.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🌡️ 11. Temperature Limits'
      },
      {
        type: 'table',
        headers: ['Operation Phase', 'Safe Temperature Range'],
        rows: [
          ['Charging', '0°C to 45°C'],
          ['Discharging', '-20°C to 60°C'],
          ['Storage', '15°C to 25°C preferred']
        ]
      },
      {
        type: 'paragraph',
        text: 'Warnings: Keep cells away from direct sunlight, open flames, physical punctures, and excessive crushing forces.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 12. Common Failure Modes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Overcharging (Above 4.2V): Risks overheating, swelling, thermal runaway, and fire.',
          'Over-discharge (Below 2.5–3.0V): Leads to permanent capacity loss and internal chemical damage.',
          'Short Circuit: Triggers extremely high currents, rapid heating, and immediate fire hazards.',
          'Physical Damage: Never puncture, bend, or crush the steel case.',
          'Poor Quality Cells: Counterfeit batteries often have lower capacity than labeled, overheat easily, and exhibit poor cycle life.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔍 13. How to Choose an 18650 Battery'
      },
      {
        type: 'paragraph',
        text: 'When selecting cells, evaluate:\n• Nominal capacity (mAh)\n• Continuous discharge current limit (A)\n• Manufacturer reputation\n• Protected vs unprotected cell configuration\n• Intended application loads'
      },
      {
        type: 'paragraph',
        text: 'Common Reputable Brands:\n• Panasonic / Sanyo\n• Samsung\n• LG\n• Sony / Murata'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 14. Typical Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Robotics and automation',
          'Laptops and power banks',
          'High-intensity flashlights',
          'Drones and RC vehicles',
          'Electric bicycles',
          'DIY electronics and IoT sensor nodes'
        ]
      },
      {
        type: 'Requirements & Trade-offs',
        level: 2,
        text: 'Requirements & Trade-offs'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Advantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'High energy density relative to size',
          'Rechargeable chemistry',
          'Long cycle life (typically 300 to 1000+ cycles)',
          'Lightweight cylindrical form factor',
          'Widely available in the market'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Disadvantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Requires protection circuitry (BMS)',
          'Extremely sensitive to overcharge and deep discharge',
          'Can be hazardous if damaged, shorted, or misused',
          'Capacity decreases naturally with age'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: '3s-bms-board-guide',
    title: '3S BMS Board (10A–20A) - Battery Management System for 3-Cell Li-ion Packs',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '10 min',
    featured: false,
    excerpt: 'An essential guide on using 3S Battery Management Systems (BMS) for protecting and balancing 3-cell Lithium-ion battery configurations in embedded and robotics systems.',
    coverImage: '/blog/2-BMS/bms.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'A 3S BMS is an electronic protection circuit that monitors and protects a three-cell lithium-ion battery pack from unsafe operating conditions such as overcharging, over-discharging, overcurrent, short circuits, and cell imbalance.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Does "3S" Mean?'
      },
      {
        type: 'paragraph',
        text: '3S means 3 Cells Connected In Series.'
      },
      {
        type: 'paragraph',
        text: 'Example:\n• Cell 1 = 3.7V\n• Cell 2 = 3.7V\n• Cell 3 = 3.7V'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Total Pack Voltage Calculations'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Nominal Voltage: 3 × 3.7V = 11.1V',
          'Fully Charged Voltage: 3 × 4.2V = 12.6V',
          'Minimum Safe Voltage: 3 × 3.0V ≈ 9.0V'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. What Does a BMS Do?'
      },
      {
        type: 'paragraph',
        text: 'A BMS continuously monitors:\n• Cell Voltage\n• Current\n• Temperature (in supported models)\n• Balance\n• Short Circuits'
      },
      {
        type: 'paragraph',
        text: 'If any monitored parameter becomes unsafe, the BMS will automatically disconnect the battery to protect the pack.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Typical Pinout'
      },
      {
        type: 'paragraph',
        text: 'Most 3S BMS boards feature the following connection pads:'
      },
      {
        type: 'table',
        headers: ['Pin', 'Function'],
        rows: [
          ['B-', 'Battery Pack Negative'],
          ['B1', 'Between Cell 1 & Cell 2'],
          ['B2', 'Between Cell 2 & Cell 3'],
          ['B+', 'Battery Pack Positive'],
          ['P-', 'Output / Charging Negative'],
          ['P+', 'Output / Charging Positive (often shared/same as B+)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 4. Wiring Diagram'
      },
      {
        type: 'image',
        url: '/blog/2-BMS/bms1.jpeg',
        caption: 'Figure 1: 3S BMS Wiring Configuration and Interface Diagram'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 5. Protection Features'
      },
      {
        type: 'heading',
        level: 3,
        text: '(A) Overcharge Protection'
      },
      {
        type: 'paragraph',
        text: 'Cuts charging current when cell voltage exceeds 4.20V. This protects battery life, limits overheating, and prevents fire risks.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(B) Over-discharge Protection'
      },
      {
        type: 'paragraph',
        text: 'Disconnects the battery when the cell voltage drops below 2.7–3.0V/cell. This protects against permanent chemical damage and capacity loss.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(C) Overcurrent Protection'
      },
      {
        type: 'paragraph',
        text: 'If load current exceeds the rated limit (e.g. 20A limit), the BMS immediately disconnects the output to protect internal components.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(D) Short Circuit Protection'
      },
      {
        type: 'paragraph',
        text: 'If positive and negative terminals are directly connected (shorted), the BMS disconnects the load within milliseconds.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(E) Cell Balancing'
      },
      {
        type: 'paragraph',
        text: 'Cells do not age equally. Example state:\n• Cell 1 = 4.20V\n• Cell 2 = 4.18V\n• Cell 3 = 4.10V'
      },
      {
        type: 'paragraph',
        text: 'Without balancing, cell imbalances compound over time, leading to overcharging of one cell and battery damage. Cell balancing keeps cells at similar voltages.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 6. Current Rating (10A–20A)'
      },
      {
        type: 'paragraph',
        text: 'BMS boards are rated by their continuous output limit (e.g., 10A or 20A). You must choose the rating based on the total load current:'
      },
      {
        type: 'paragraph',
        text: 'Example Load Calculation:\n• ESP32 MCU: 0.3A\n• Servo Motors: 5.0A\n• DC Motors: 8.0A\n• Total Load: ≈ 13A\nRecommended selection: 20A BMS board.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Using a 3S BMS in Robotics'
      },
      {
        type: 'paragraph',
        text: 'Typical Architecture: 3x 18650 Cells -> 3S BMS -> Main Switch -> Buck Converter (e.g., LM2596 stepping down 11.1V to 5V rail) -> ESP32, Sensors, and Servos.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Common Mistakes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Wrong Wiring Order: Connecting B+, B1, B2, and B- in the incorrect order can destroy the BMS logic board. Always follow the manufacturer-specified wiring sequence.',
          'Exceeding Current Rating: Attempting to drive heavy loads (e.g. 25A motor on a 10A board) leads to overheating, immediate shutdown, or blown MOSFETs.',
          'Charging Without Proper Charger: A 3S pack requires a dedicated 12.6V Li-ion charger. A BMS is protective and does not replace the charger.',
          'Mixing Different Cells: Never mix cells of different capacities, brands, ages, or chemistries (e.g. combining 3000mAh, 2500mAh, and 1800mAh cells). This is dangerous and causes severe cell imbalances.',
          'No Ventilation: High discharge currents generate significant heat. Always provide adequate ventilation in enclosed robot chassis.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 9. Typical Specifications'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Typical Value'],
        rows: [
          ['Battery Type', 'Li-ion (3S)'],
          ['Nominal Voltage', '11.1V'],
          ['Full Charge Voltage', '12.6V'],
          ['Continuous Current', '10A–20A'],
          ['Overcharge Cutoff', '~4.25V/cell'],
          ['Over-discharge Cutoff', '~2.8V/cell'],
          ['Short Circuit Protection', 'Yes'],
          ['Cell Balancing', 'Usually Passive']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Mobile robots and autonomous platforms',
          'Robotic arms and active grippers',
          'Drones and quadcopters',
          'DIY Uninterruptible Power Supplies (UPS)',
          'Portable battery power stations',
          'Electric scooters and skateboards',
          'IoT edge devices'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔐 11. Safety Guidelines'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Always:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Use matched, balanced cells.',
          'Use a dedicated 12.6V Li-ion charger.',
          'Inspect cells for any swelling, leaking, or damage.',
          'Add an inline fuse for extra hardware protection.',
          'Keep the BMS within its continuous current rating.',
          'Secure all wiring to prevent dynamic shorts.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Never:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Short the battery terminals.',
          'Charge the pack unattended or with unknown chargers.',
          'Use damaged or punctured lithium-ion cells.',
          'Bypass the BMS protection circuitry.'
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'ina226-current-sensor-guide',
    title: 'INA226 Current Sensor Module - High Precision Power Monitoring IC',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An in-depth guide on the INA226 digital power monitor module: shunt resistor calculations, high-side connection schemes, I2C telemetry, and hardware interrupt alerts in mobile robotics.',
    coverImage: '/blog/3-ina226/ina226.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'INA226 is a high-precision digital power monitor IC that measures current, bus voltage, and power using a shunt resistor and communicates results via I2C.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Problem INA226 Solves'
      },
      {
        type: 'paragraph',
        text: 'In robotics systems (powering motors, servos, microcontrollers, and sensors), you need to know:\n• How much current is flowing?\n• Is the battery overloaded?\n• Is power stable?\n• What is the real-time power consumption?'
      },
      {
        type: 'paragraph',
        text: 'Without INA226, you are guessing power usage, risking unsafe battery operations, and have no energy profiling. With INA226, you get real-time current, voltage, and power telemetries.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. How INA226 Works'
      },
      {
        type: 'image',
        url: '/blog/3-ina226/ina2261.jpeg',
        caption: 'Figure 1: Current Measurement via Voltage Drop Across Shunt Resistor'
      },
      {
        type: 'paragraph',
        text: 'INA226 measures current using a shunt resistor. Current flows through the shunt resistor, creating a very small voltage drop. The IC measures this drop and calculates the current using Ohm\'s Law: V = I × R, or I = Vshunt / Rshunt.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Core Measurements'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Shunt Voltage: The very small voltage (µV–mV range) dropped across the shunt resistor.',
          'Bus Voltage: The system voltage on the rail (0V to 36V range).',
          'Current: Calculated internally using: I = Vshunt / Rshunt.',
          'Power: Calculated internally using: Power = Voltage × Current.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 4. Pin Description'
      },
      {
        type: 'table',
        headers: ['Pin', 'Function'],
        rows: [
          ['VBUS', 'Voltage measurement input'],
          ['IN+', 'Shunt high side connection'],
          ['IN-', 'Shunt low side connection'],
          ['VCC', '3.3V / 5V power supply input'],
          ['GND', 'Ground reference'],
          ['SDA', 'I2C Serial Data line'],
          ['SCL', 'I2C Serial Clock line'],
          ['ALERT', 'Interrupt / threshold warning flag']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 5. Connection Architecture'
      },
      {
        type: 'image',
        url: '/blog/3-ina226/ina2262.jpeg',
        caption: 'Figure 2: INA226 High-Side Sensing and I2C Interface Wiring Diagram'
      },
      {
        type: 'paragraph',
        text: 'High-side measurement path: Battery (+) -> IN+ -> [Shunt Resistor] -> IN- -> Load (ESP32/Motors).\nI2C interface connection: ESP32 pins connected to INA226: SDA -> SDA, SCL -> SCL, and GND -> GND.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 6. Key Specifications'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Value'],
        rows: [
          ['Voltage range', '0 – 36V'],
          ['Supply voltage', '2.7 – 5.5V'],
          ['Resolution', '16-bit ADC'],
          ['Accuracy', 'Very high (~0.1%)'],
          ['Interface', 'I2C / SMBus'],
          ['Current sensing', 'via external shunt resistor']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 7. Shunt Resistor (Critical Concept)'
      },
      {
        type: 'paragraph',
        text: 'The value of Rshunt determines the maximum measurable current range:\n• 0.1Ω shunt: Maximum current range ≈ 0.8A\n• 0.01Ω shunt: Maximum current range ≈ 8A+'
      },
      {
        type: 'paragraph',
        text: 'Design Trade-off: A higher resistance increases measurement accuracy but limits the maximum current and generates more heat. A lower resistance reduces voltage sag and supports higher currents, but reduces low-current accuracy.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 8. Why INA226 is Important in Robotics'
      },
      {
        type: 'paragraph',
        text: 'In integrated systems containing an ESP32, YOLOv8 Vision processor, and servo motors, the INA226 serves to:\n• Detect motor overloads and stalls.\n• Track battery discharge rates.\n• Optimize general power usage profiles.\n• Prevent voltage brownouts.'
      },
      {
        type: 'paragraph',
        text: 'Example: A servo motor hits a physical block, spiking the current. The system detects the overload via INA226 telemetry and halts the motion to prevent motor burnout.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 9. ALERT Pin (Advanced Feature)'
      },
      {
        type: 'paragraph',
        text: 'The INA226 ALERT pin can trigger hardware interrupts in the host MCU when limits are exceeded, such as overcurrent, undervoltage, or power threshold crossings. Example: If current exceeds 5A, the ALERT pin immediately triggers a GPIO interrupt on the ESP32.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 10. Data Flow'
      },
      {
        type: 'paragraph',
        text: 'Conversion path: Shunt Voltage -> 16-bit ADC -> Digital Conversion & Calibration -> I2C Register Reading -> MCU Controller.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 11. Common Mistakes (Very Important)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Wrong wiring of shunt: Triggers wrong or zero value readings.',
          'No proper ground reference: Leads to highly unstable and floating voltage values.',
          'Incorrect VBUS connection: The VBUS voltage reading drops to 0 or reports invalid states.',
          'Using wrong shunt resistor: Breaks internal calibration math, leading to incorrect current outputs.',
          'High noise environment: Magnetic fields from DC motors can distort I2C signals if wiring layouts are poor.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 12. Practical Robotics Use Case'
      },
      {
        type: 'paragraph',
        text: 'Typical Loop: Battery (12V) -> INA226 -> Motor Driver + ESP32. This enables real-time tracking of motor loads, system voltage drops under high torque, and net power consumption.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 13. Advantages vs Limitations'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Advantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Very high precision current and voltage measurements.',
          'Digital I2C output eliminates analogue noise issues.',
          'Calculates power directly in hardware registers.',
          'Supports bus voltages up to 36V.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Limitations'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Requires precise shunt resistor calculation and installation.',
          'Requires custom code for I2C configuration and calibration.',
          'Extremely sensitive to wiring layout and connection noise.',
          'Not plug-and-play compared to simple hall-effect sensors like the ACS712.'
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'lm2596-buck-converter-guide',
    title: 'LM2596 Buck Converter (12V → 5V) — Step-Down DC-DC Power Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering overview of the LM2596 high-efficiency step-down buck converter: switching operations, key components, wiring, heat management, and robotic power rail design.',
    coverImage: '/blog/4-lm2596/lm2596.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The LM2596 is a high-efficiency switching DC-DC buck converter that steps down higher DC voltage (e.g., 12V) to a stable lower voltage (e.g., 5V or 3.3V) using high-frequency energy switching and energy storage in an inductor.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Problem LM2596 Solves'
      },
      {
        type: 'paragraph',
        text: 'In robotics systems, batteries typically provide 12V, 11.1V, or 7.4V. However, microcontrollers (ESP32) and sensors require 5V or 3.3V.\nDirectly connecting devices to the battery will burn them instantly. The LM2596 solves this by stepping down 12V to a stable, regulated 5V rail.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. How LM2596 Works (Switching Principle)'
      },
      {
        type: 'image',
        url: '/blog/4-lm2596/lm25961.jpeg',
        caption: 'Figure 1: Switching Regulation and Inductor Energy Storage Cycle'
      },
      {
        type: 'paragraph',
        text: 'The LM2596 operates using pulse-width modulation (PWM) switching combined with inductor energy storage:\n1. Switch ON: Current flows from the input to store energy in the inductor.\n2. Switch OFF: The inductor releases energy through a freewheeling diode, continuing current flow to the load.\n3. Output Smoothing: Output capacitors smooth the voltage ripple to provide a stable DC voltage.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Basic Wiring (12V → 5V)'
      },
      {
        type: 'image',
        url: '/blog/4-lm2596/lm25962.jpeg',
        caption: 'Figure 2: Basic Input-Output Connections for Step-Down Regulation'
      },
      {
        type: 'paragraph',
        text: 'Wiring configuration: Connect Battery (+) to IN+ and Battery (-) to IN-. Take the output from OUT+ (5V) and OUT- (GND).\nOutput Adjustment: Use a small screwdriver on the onboard potentiometer to set the output voltage using a multimeter before connecting the load.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 4. Key Components Inside Module'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['Inductor', 'Stores magnetic energy during the switch ON phase'],
          ['Schottky Diode', 'Provides a freewheeling path for current when the switch is OFF'],
          ['Capacitors', 'Smooth output voltage ripples for stable output'],
          ['Potentiometer', 'Adjusts the output voltage feedback loop'],
          ['IC (LM2596)', 'Controls the high-frequency switching transistor']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 5. Electrical Specifications'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Value'],
        rows: [
          ['Input Voltage', '4V – 40V'],
          ['Output Voltage', '1.25V – 35V (adjustable)'],
          ['Output Current', 'up to 2–3A (with cooling)'],
          ['Efficiency', '80% – 92%'],
          ['Switching Frequency', '~150 kHz']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 6. Why It Is Efficient (Important Concept)'
      },
      {
        type: 'paragraph',
        text: 'Linear Regulators drop voltage by burning the excess energy as heat (low efficiency). Buck converters switch the energy flow ON and OFF rapidly (high efficiency), wasting significantly less power.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Robotics Use Cases'
      },
      {
        type: 'image',
        url: '/blog/4-lm2596/lm25963.jpeg',
        caption: 'Figure 4: Integration of LM2596 into Robotic Controller Boards'
      },
      {
        type: 'paragraph',
        text: 'Typical path: 12V Battery (3S/4S) -> LM2596 -> 5V Rail -> ESP32, sensors, logic, and small servos. Ideal for clean MCU power rails isolates from motor noises.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Limitations (Important Engineering Reality)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Not ideal for high-current motors: Large voltage ripples under sudden motor stall current draw can trigger MCU resets.',
          'Needs heat management: Drawing above 2A requires adding a heatsink or active fan airflow to prevent thermal shutdown.',
          'Output noise: The switching ripple makes it less ideal for high-precision analog sensor rails without additional filtering.',
          'Potentiometer drift: Low-grade potentiometers can drift under robotic vibrations, altering output voltage.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 9. Common Mistakes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Not measuring output before connecting load: Connecting a default factory-configured module can push 12V directly, instantly destroying the ESP32.',
          'Overloading module (>3A): Causes extreme overheating, voltage drops, and potential component destruction.',
          'Wrong polarity wiring: Reversing inputs can instantly blow the input capacitors and IC.',
          'Using the same rail for motors and MCU: Motor noise bypasses the regulator, triggering controller brownouts.',
          'Not securing potentiometer: Extreme vibrations in mobile robots can change the screw position, drifting output voltage.'
        ]
      },
      {
        type: '🔌 10. Best Robotics Power Design Practice',
        level: 2,
        text: '🔌 10. Best Robotics Power Design Practice'
      },
      {
        type: 'paragraph',
        text: 'Recommended setup: Battery (12V) splits into two paths:\n1. Path 1: Direct 12V to high-current Motor Drivers.\n2. Path 2: LM2596 steps down 12V -> 5V MCU Rail (then secondary LDO to 3.3V sensors).'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 11. LM2596 vs LDO Regulator'
      },
      {
        type: 'table',
        headers: ['Feature', 'LM2596', 'LDO Regulator'],
        rows: [
          ['Efficiency', 'High', 'Low'],
          ['Heat Generation', 'Low', 'High'],
          ['Circuit Complexity', 'Medium', 'Low'],
          ['Output Ripple / Noise', 'Medium', 'Low'],
          ['Primary Use case', 'High-current/voltage step down', 'Low-power / sensor rails']
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'esp32-development-module-guide',
    title: 'ESP32 Development Module (DevKit V1) - WiFi + Bluetooth Embedded Controller',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '11 min',
    featured: false,
    excerpt: 'An in-depth guide on the dual-core ESP32 DevKit V1 module: pinout configurations, power limits, bootstrapping pins, interrupts, and integration in robotics control boards.',
    coverImage: '/blog/5-esp32/esp32.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The ESP32 DevKit is a dual-core, WiFi + Bluetooth enabled microcontroller platform designed for real-time embedded systems, IoT applications, and edge computing with integrated peripherals (ADC, PWM, SPI, I2C, UART).'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What is ESP32 (Chip Level)'
      },
      {
        type: 'image',
        url: '/blog/5-esp32/esp321.jpeg',
        caption: 'Figure 01: ESP32 Chip Architecture'
      },
      {
        type: 'paragraph',
        text: 'ESP32 is a SoC (System on Chip) containing CPU, WiFi, Bluetooth, and peripherals developed by Espressif Systems.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. ESP32 DevKit Structure'
      },
      {
        type: 'image',
        url: '/blog/5-esp32/esp322.jpeg',
        caption: 'Figure 2: ESP32 DevKit Structure'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['ESP-WROOM-32', 'Main processor module containing the ESP32 silicon die, flash, and RF shield'],
          ['USB-UART Chip', 'Provides USB-to-serial conversion for programming and debugging terminal output'],
          ['3.3V Regulator', 'Steps down 5V USB/VIN input to stable 3.3V logic supply rail'],
          ['Flash Memory', 'Non-volatile storage for program firmware and configuration assets'],
          ['Antenna', 'Onboard PCB trace antenna for 2.4 GHz WiFi and Bluetooth transmission']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'GPIO Pins'
      },
      {
        type: 'paragraph',
        text: 'GPIO pins 0 to 39 are available. They are configured for digital input/output, reading sensors, generating PWM control signals, and responding to hardware interrupts.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Power Pins'
      },
      {
        type: 'table',
        headers: ['Pin', 'Function'],
        rows: [
          ['VIN', 'External 5V regulated input power pin'],
          ['3V3', 'Regulated 3.3V output rail (for powering external sensors up to ~250mA)'],
          ['GND', 'Ground reference connection']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Communication Pins'
      },
      {
        type: 'table',
        headers: ['Protocol', 'Available / Default Pins'],
        rows: [
          ['I2C', 'SDA, SCL (default GPIO 21, 22 but remappable)'],
          ['SPI', 'MOSI, MISO, SCLK, CS (default VSPI: 23, 19, 18, 5)'],
          ['UART', 'TX, RX (default GPIO 1, 3 for programming; TX2, RX2 on 17, 16)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Key Features'
      },
      {
        type: 'heading',
        level: 3,
        text: '(A) Dual-Core Processor'
      },
      {
        type: 'paragraph',
        text: 'Contains two independent Harvard Architecture Xtensa LX6 CPU cores. Typically, Core 0 is assigned for system tasks (such as managing WiFi/BLE stacks) while Core 1 runs the user application code.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(B) Clock Speed'
      },
      {
        type: 'paragraph',
        text: 'Adjustable clock frequency up to 240 MHz, delivering high-speed execution for complex calculations.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(C) Wireless Communication'
      },
      {
        type: 'paragraph',
        text: 'Integrated 802.11 b/g/n WiFi (2.4 GHz) alongside Bluetooth Classic and Bluetooth Low Energy (BLE) for local mesh networks and remote monitoring.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(D) ADC / DAC'
      },
      {
        type: 'table',
        headers: ['Feature', 'Value / Resolution'],
        rows: [
          ['ADC (Analogue to Digital)', '12-bit resolution (up to 18 channels)'],
          ['DAC (Digital to Analogue)', '8-bit resolution (2 independent channels)']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: '(E) PWM (Pulse Width Modulation)'
      },
      {
        type: 'paragraph',
        text: 'Equipped with the LEDC peripheral, enabling up to 16 independent PWM channels for high-precision servo control, motor speed control, and LED dimming.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 5. Power Requirements'
      },
      {
        type: 'image',
        url: '/blog/5-esp32/esp323.jpeg',
        caption: 'Figure 3: Safe Power Configurations and Volts Protection Rules'
      },
      {
        type: 'paragraph',
        text: 'Input Options:\n1. USB port (5V input mapped through internal regulator).\n2. VIN pin (regulated 5V input recommended).\n\nCritical Rule: The ESP32 logic operates at 3.3V ONLY. Never apply 5V directly to any GPIO pin, as it lacks 5V tolerance and will permanently destroy the chip.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 6. Common Problems'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Brownout Reset: Triggered by unstable power rails or motor noise. Avoid this by separating logic and motor supplies, and using decoupling capacitors.',
          'Boot Fail: The module fails to boot into code if strapped pins are held in the wrong state at start-up, or during code upload conflicts.',
          'WiFi Drop: Random dropouts in connection are often caused by voltage dips when the RF transmitter begins sending packets. Ensure a stable regulator supply.',
          'Overcurrent Damage: Connecting inductive loads (motors/coils) directly to GPIO pins will exceed the safe 40mA source/sink limit and destroy internal transistors.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 7. Boot Strapping Pins (Important)'
      },
      {
        type: 'paragraph',
        text: 'The ESP32 samples state on specific pins during power-up to determine the boot behavior:'
      },
      {
        type: 'table',
        headers: ['Pin', 'Function / Required Startup State'],
        rows: [
          ['GPIO0', 'Boot mode selection (must be HIGH/floating for regular boot; pulled LOW for flash programming mode)'],
          ['GPIO2', 'Boot configuration (must be LOW or floating during normal start-up)'],
          ['GPIO12', 'Internal flash voltage selection (determines 1.8V or 3.3V operation; avoid pulling high/low externally)'],
          ['GPIO15', 'SPI boot mode configuration (default debug logging output pin; let float)']
        ]
      },
      {
        type: 'paragraph',
        text: 'Warning: Attaching external pull-ups/pull-downs to these pins can trap the ESP32 in flash programming mode or trigger boot loops.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 8. Interrupts in ESP32'
      },
      {
        type: 'paragraph',
        text: 'Supports high-precision interrupts on any GPIO pin. Also includes hardware timer interrupts, ADC conversion-complete interrupts, and direct task notifications through FreeRTOS for multi-threaded setups.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 9. ESP32 in Robotics Systems'
      },
      {
        type: 'image',
        url: '/blog/5-esp32/esp324.jpeg',
        caption: 'Figure 4: ESP32 Interface Loop with Sensors and Actuators'
      },
      {
        type: 'paragraph',
        text: 'Typical architecture connects sensors (INA226, IMU, ultrasonics) over I2C/SPI, outputs speed/position commands via PWM to motor drivers, communicates telemetry over WiFi/BLE, and receives decisions from edge servers.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 10. Performance Limitations'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Limited internal SRAM (~520 KB) prevents storing heavy assets or frames.',
          'Not suitable for onboard heavy ML/Vision inferences (e.g. raw YOLOv8 models). Use an edge server or SBC instead, passing lightweight telemetry through the ESP32.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔐 11. Security Features'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Hardware secure boot verification.',
          'Flash encryption to prevent code reverse-engineering.',
          'Onboard cryptographic hardware accelerators (AES, SHA, RSA).',
          'Full TLS/SSL handshake support for secure IoT cloud connectivity.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 12. ESP32 vs Arduino'
      },
      {
        type: 'table',
        headers: ['Feature', 'ESP32 DevKit V1', 'Arduino UNO'],
        rows: [
          ['CPU Cores & Speed', 'Dual-core @ 240 MHz', 'Single-core @ 16 MHz'],
          ['WiFi & Bluetooth', 'Yes (Built-in)', 'No (Requires shields)'],
          ['RAM Capacity', '520 KB', '2 KB'],
          ['Logic Levels', '3.3V', '5V'],
          ['Recommended Use Cases', 'IoT, telemetry, wireless networks, robotics', 'Basic I/O, simple logic, education']
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'esp32-cam-module-guide',
    title: 'ESP32-CAM Module - Low-Cost Embedded Vision + WiFi Camera System',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the ESP32-CAM module: OV2640 camera registers, wiring, programming modes, system workflows, and edge computing vision limitations in robotics.',
    coverImage: '/blog/6-esp32cam/esp32cam.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'ESP32-CAM is a compact ESP32-based microcontroller module integrated with an OV2640 camera sensor, WiFi connectivity, and optional microSD storage designed for low-cost embedded vision and IoT camera applications.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Makes ESP32-CAM Different'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam1.jpeg',
        caption: 'Figure 2: ESP32-CAM Module with OV2640 Camera'
      },
      {
        type: 'table',
        headers: ['Feature', 'Standard ESP32', 'ESP32-CAM Module'],
        rows: [
          ['Camera Support', 'No camera input header default', 'Integrated OV2640 camera sensor connector'],
          ['SD Card Slot', 'Requires external wiring / shield', 'Built-in microSD card slot onboard'],
          ['GPIO Accessibility', 'Many free accessible pins (~25+)', 'Highly limited (most consumed by camera/SD interface)'],
          ['WiFi / Bluetooth', 'Yes (Built-in)', 'Yes (Built-in)'],
          ['Primary Use Cases', 'General purpose control, sensors, actuators', 'Embedded vision, surveillance, motion capture nodes']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Main Components'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam2.jpeg',
        caption: 'Figure 2: ESP32-CAM Module Components'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['ESP32-WROOM', 'Dual-core processor handling camera streams and RF protocols'],
          ['OV2640', '2-Megapixel image sensor capturing pixel data'],
          ['PSRAM (4MB/8MB)', 'External volatile memory used for buffering high-resolution image frames'],
          ['microSD slot', 'Provides local non-volatile storage for captured photos and video logs'],
          ['Voltage Regulator', 'Steps down external 5V input to clean 3.3V logic level']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📸 3. Camera (OV2640 Sensor)'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam3.jpeg',
        caption: 'Figure 3: ESP32-CAM Module Camera Sensor'
      },
      {
        type: 'table',
        headers: ['Feature', 'Specification / Value'],
        rows: [
          ['Resolution', 'Up to 2 Megapixels (1600 × 1200 maximum)'],
          ['Output Formats', 'JPEG, RGB565, YUV422, YUV420'],
          ['Interface', 'SCCB (Serial Camera Control Bus, I2C-compatible protocol)'],
          ['Frame Buffer Size', 'Buffered in external PSRAM; dependent on selected resolution']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 4. Pinout (Important Limitation)'
      },
      {
        type: 'table',
        headers: ['Pin', 'Function / Assigned Signal'],
        rows: [
          ['5V', 'Primary external power input (5V required)'],
          ['GND', 'Common ground connection'],
          ['GPIO0', 'Strapping pin (pulled LOW to enter firmware flashing upload mode)'],
          ['U0R / U0T', 'UART serial RX / TX pins (used for programming and debug output)'],
          ['GPIO12 - GPIO16', 'Shared internal data signals consumed by camera and SD card interfaces']
        ]
      },
      {
        type: 'paragraph',
        text: 'Warning: Because the camera sensor and microSD card interface consume the majority of the ESP32 pins internally, only a tiny handful of free GPIOs are accessible for external actuators or sensors.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 5. Power Requirements (Critical)'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'ESP32-CAM is extremely sensitive to power supply ripples and dips.',
          'Recommendation: Supply a stable 5V rail capable of delivering at least 1.0A continuous.',
          'Common Failure Mode: Running off a weak USB-to-serial board power supply causes brownouts, triggering continuous reboot loops when the camera initializes.',
          'Hardware mitigations: Power via a dedicated LM2596 buck converter regulator and solder a 100–470 µF capacitor across the VCC and GND pins near the module.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 6. Programming Mode (Very Important)'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam4.jpeg',
        caption: 'Figure 4: ESP32-CAM Module Programming'
      },
      {
        type: 'paragraph',
        text: 'To upload code, wire the module to an FTDI USB-UART adapter: FTDI 5V -> 5V, GND -> GND, TX -> U0R, RX -> U0T. Bridge GPIO0 to GND, press the manual RESET button, upload the code, then disconnect GPIO0 and reset again to boot.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 7. Working Architecture'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam6.jpeg',
        caption: 'Figure 5: ESP32-CAM Module Working Architecture'
      },
      {
        type: 'paragraph',
        text: 'Hardware flow: Camera Sensor (OV2640) -> ESP32 Processing -> Image Compression (JPEG in PSRAM) -> WiFi Streaming / Cloud Upload.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🌐 8. Common Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'WiFi Surveillance Cameras: Streaming live MJPEG video feeds over a local web server.',
          'Face Detection & Recognition: Running lightweight edge AI models for basic security access.',
          'IoT Security Systems: Capturing and uploading motion-triggered images to cloud folders.',
          'Robotics Vision Nodes: Acting as a low-cost remote camera eye streaming visuals to a central control computer.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 9. ESP32-CAM in Robotics Systems'
      },
      {
        type: 'image',
        url: '/blog/6-esp32cam/esp32cam5.jpeg',
        caption: 'Figure 7: ESP32-CAM Module Robotics'
      },
      {
        type: 'paragraph',
        text: 'Typical loop: ESP32-CAM (captures frame) -> WiFi Stream -> Central YOLOv8/AI Server (processes frame) -> Robot Decision Engine -> Motor Controllers.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 10. Limitations (Very Important)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Low local processing power: Cannot run heavy machine learning models (like YOLO) on the module itself.',
          'Limited RAM: Frame size is constrained by the PSRAM; disabling PSRAM prevents capturing high-res images.',
          'GPIO Shortage: The camera sensor consumes almost all pins, leaving very few for sensors or servo motor control.',
          'Power sensitivity: Any voltage drop triggers brownout resets and camera failures.',
          'No USB interface: Requires an external FTDI tool for flashing and serial monitoring.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 11. Common Mistakes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Using weak USB power: Triggers continuous brownout loops when initializing the camera.',
          'Incorrect upload wiring: Forgetting to bridge GPIO0 to GND or forgetting to reset the board before flashing.',
          'Using camera GPIOs: Attaching external components to pins mapped internally to the camera registers causes capture failures.',
          'Ignoring external antenna settings: Cheap boards default to the weak PCB trace antenna. Modifying the jumper resistor is required to enable the external IPEX antenna connector.'
        ]
      },
      {
        type: 'bars 12. ESP32 vs ESP32-CAM',
        level: 2,
        text: '📊 12. ESP32 vs ESP32-CAM'
      },
      {
        type: 'table',
        headers: ['Feature', 'Standard ESP32 Module', 'ESP32-CAM Module'],
        rows: [
          ['Camera Sensor Support', 'No (requires custom SPI modules)', 'Yes (dedicated parallel OV2640 interface)'],
          ['Available GPIO Pins', 'High (~25+ pins)', 'Very low (~6 pins)'],
          ['AI Vision Capability', 'Requires external sensor feeds', 'Directly integrates visual feed'],
          ['Hardware Design Flexibility', 'High (great for general motor/actuator controllers)', 'Medium (highly optimized for vision capture)']
        ]
      }
    ]
  },
  {
    id: 7,
    slug: 'tb6612fng-motor-driver-guide',
    title: 'TB6612FNG Motor Driver - Dual H-Bridge for DC Motors & Robotics',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering overview of the TB6612FNG dual H-bridge motor driver: internal MOSFET switching, PWM speed regulation, pin configurations, and power rail isolation.',
    coverImage: '/blog/7-TB6612FNG/TB6612FNG.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The TB6612FNG is a dual MOSFET-based H-bridge motor driver IC that enables bidirectional control and PWM speed regulation of two DC motors with high efficiency and low voltage drop.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Problem It Solves'
      },
      {
        type: 'paragraph',
        text: 'Microcontrollers like ESP32 cannot drive motors directly because GPIO outputs are limited to 3.3V and a few mA of current, whereas DC motors require 6V–12V and several amperes under load. An intermediate control signal switching stage is required.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working (H-Bridge Concept)'
      },
      {
        type: 'image',
        url: '/blog/7-TB6612FNG/TB6612FNG1.jpeg',
        caption: 'Figure 1: Dual H-Bridge MOSFET Switch Configuration'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Direction Control Truth Table'
      },
      {
        type: 'table',
        headers: ['IN1 Input', 'IN2 Input', 'Motor State'],
        rows: [
          ['HIGH (1)', 'LOW (0)', 'Forward direction rotation'],
          ['LOW (0)', 'HIGH (1)', 'Reverse direction rotation'],
          ['LOW (0)', 'LOW (0)', 'Stop (coast - motor slows down naturally)'],
          ['HIGH (1)', 'HIGH (1)', 'Brake (motor stops immediately)']
        ]
      },
      {
        type: 'paragraph',
        text: 'Speed Control: Speed is regulated by applying a Pulse Width Modulation (PWM) signal on the PWMA / PWMB pins. A higher duty cycle drives the motor faster, while a lower duty cycle reduces the speed.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration (Critical)'
      },
      {
        type: 'image',
        url: '/blog/7-TB6612FNG/TB6612FNG2.jpeg',
        caption: 'Figure 2: Dual H-Bridge MOSFET Switch Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Function / Description'],
        rows: [
          ['VM', 'Motor power supply input (2.5V – 13.5V range)'],
          ['VCC', 'Logic power supply input (2.7V – 5.5V logic)'],
          ['GND', 'Common ground reference pin'],
          ['STBY', 'Standby control pin (must be pulled HIGH to enable the driver logic)'],
          ['AIN1 / AIN2', 'Motor A direction inputs'],
          ['PWMA', 'Motor A speed control input (PWM signal)'],
          ['BIN1 / BIN2', 'Motor B direction inputs'],
          ['PWMB', 'Motor B speed control input (PWM signal)'],
          ['AO1 / AO2', 'Motor A driver outputs'],
          ['BO1 / BO2', 'Motor B driver outputs']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Electrical Characteristics'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Logic input voltage compatibility: 2.7V to 5.5V.',
          'Motor voltage range support: up to ~13.5V.',
          'Continuous output current: ~1.2A continuous per channel.',
          'Peak current capacity: ~3.2A in short pulse bursts.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 5. Why It Is Better Than L298N'
      },
      {
        type: 'table',
        headers: ['Feature / Spec', 'TB6612FNG Driver', 'L298N Driver'],
        rows: [
          ['Internal Switch Technology', 'MOSFET transistors (low resistance)', 'BJT transistors (high resistance)'],
          ['Internal Voltage Drop', 'Very low (~0.5V typical drop)', 'High (~2.0V voltage drop as heat)'],
          ['Heat Generation', 'Low (runs cool at typical load currents)', 'High (requires bulky heatsinks)'],
          ['Net Output Efficiency', 'High (ideal for compact battery setups)', 'Low (wastes battery capacity as heat)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 6. Wiring (ESP32 Example)'
      },
      {
        type: 'image',
        url: '/blog/7-TB6612FNG/TB6612FNG4.jpeg',
        caption: 'Figure 3: ESP32 Interface and Motor Driver Pinouts Wiring Map'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• ESP32 PWM pins -> PWMA / PWMB\n• ESP32 DIR pins -> AIN1/AIN2 / BIN1/BIN2\n• ESP32 3.3V -> VCC\n• ESP32 GND -> GND\n• External Battery (6-12V) -> VM / GND\n• DC Motors -> AO1/AO2 / BO1/BO2\n\nCritical Rule: The motor power (VM) must be kept electrically separate from the logic power (VCC).'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Robotics Use Case'
      },
      {
        type: 'paragraph',
        text: 'Widely used in 2WD and 4WD autonomous mobile robots (AMRs), line-following platforms, miniature conveyor belt mechanisms, active robotic arms, and mechanical grippers.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 8. Power Architecture (Important Engineering Point)'
      },
      {
        type: 'image',
        url: '/blog/7-TB6612FNG/TB6612FNG3.jpeg',
        caption: 'Figure 3: Motor Power Isolation and Logic Rail Isolation Architecture'
      },
      {
        type: 'paragraph',
        text: 'Recommended setup:\n• Battery splits into VM (direct to TB6612FNG for motors) and VCC (through a 5V/3.3V buck regulator to ESP32).\n\nCritical Design Rule: Motors must NEVER share a direct power rail with the ESP32. Doing so risks noise, EMI feedback, and sudden voltage brownouts that trigger processor resets.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Common Failure Modes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'No STBY Enable: Motor will not spin if the STBY pin is left floating. It must be driven HIGH.',
          'Wrong Grounding: Forgetting to link all GNDs (ESP32, battery, and driver) prevents the control signals from referencing correctly, leading to random behavior.',
          'Overcurrent Burnout: Drawing more than 1.2A continuous causes the chip to overheat, triggering thermal protection or permanent transistor failure.',
          'Back EMF Noise Interference: Sudden motor stops generate voltage spikes. Solder decoupling capacitors (0.1µF) directly across motor terminals and place filters near VM.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 10. Practical Control Logic'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Forward Command: Drive AIN1 = HIGH and AIN2 = LOW.',
          'Reverse Command: Drive AIN1 = LOW and AIN2 = HIGH.',
          'Speed Regulation: Apply a high frequency (e.g. 20 kHz) PWM signal to the PWMA pin; adjust the duty cycle to scale output voltage and motor speed.'
        ]
      }
    ]
  },
  {
    id: 8,
    slug: 'dc-gear-motor-guide',
    title: 'DC Gear Motor - Torque-Optimized Rotational Actuator for Robotics',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '10 min',
    featured: false,
    excerpt: 'An engineering overview of DC gear motors: gear reduction ratios, internal components, wiring diagrams, torque-speed trade-offs, and driver matching in mobile robotics.',
    coverImage: '/blog/8-dcmoter/dcmoter.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'A DC gear motor is a DC motor integrated with a mechanical gearbox that reduces speed while increasing torque, enabling controlled, high-force rotation for robotic motion systems.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. Why Gear Motors Exist'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter1.jpeg',
        caption: 'Figure 1: High-Speed Low-Torque Raw Motor vs Gearbox Reduction output'
      },
      {
        type: 'paragraph',
        text: 'A normal DC motor spins at very high speeds (thousands of RPM) but produces tiny rotational torque. This means it cannot move a robot chassis weight, climb friction surfaces, or hold loads without stalling immediately. A mechanical gearbox acts as a torque multiplier.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Structure'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter2.jpeg',
        caption: 'Figure 2: Internel Structure'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['DC Motor', 'Electromechanical core converting electrical energy into high-speed rotation'],
          ['Gear Train', 'Series of interlocking plastic or metal gears reducing output RPM'],
          ['Output Shaft', 'Durable spindle delivering the high-torque rotation to the load / wheel'],
          ['Housing', 'Protective plastic or metal shell enclosing the gear train and keeping lubrication clean']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 3. Gear Reduction Principle'
      },
      {
        type: 'paragraph',
        text: 'According to physics, rotational power is proportional to speed multiplied by torque. Assuming negligible friction losses, power remains roughly constant: Power ≈ Speed × Torque. Therefore, as the gearbox reduces the speed (RPM), the output torque increases proportionally. Example: A motor spinning at 6000 RPM through a 30:1 reduction gearbox outputs a manageable 200 RPM but with 30 times the stall torque.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 4. Key Parameters'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Meaning / Description'],
        rows: [
          ['Operating Voltage', 'Recommended voltage range (typically 3V–12V for robotics modules)'],
          ['No-Load RPM', 'Rotational speed of the output shaft when spinning freely without load'],
          ['Stall Torque', 'Maximum rotational force output when the shaft is completely blocked from spinning'],
          ['Gear Ratio', 'The reduction ratio of the gearbox (e.g. 48:1 or 120:1)'],
          ['Stall Current', 'Maximum current drawn by the motor coils when stalled under load']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 5. Torque vs Speed Trade-off'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter3.jpeg',
        caption: 'Figure 3: Speed and Torque Inverse Relation Curve'
      },
      {
        type: 'paragraph',
        text: 'The gearbox configuration shifts this balance. A higher reduction ratio delivers higher torque but lower maximum speed, whereas a lower reduction ratio yields faster speeds at the expense of climbing force.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. Types of DC Gear Motors'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter5.jpeg',
        caption: 'Figure 3: Plastic TT Motors vs D-Shaft Metal Gearbox Motors'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'TT Motor: Common 3V-6V plastic gearbox actuator; cheap, widely used in educational kits.',
          'Metal Gear Motor: Highly durable steel/brass gear assembly; delivers much higher torque and long-term reliability.',
          'High-Torque Brushed Motor: Industrial-grade actuators; high current draw, used in heavy robotic drivetrains.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 7. Wiring Concept'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter6.jpeg',
        caption: 'Figure 4: Controller to H-Bridge Driver and Gear Motor Interface Loop'
      },
      {
        type: 'paragraph',
        text: 'Power path: Power Supply -> H-Bridge Driver (TB6612FNG/L298N) -> DC Gear Motor. ESP32 pins send direction signals and PWM duty cycles to the driver, which modulates the high-current battery feed to the motor.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 8. Electrical Behavior'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Stall Condition: When a wheel hits a wall, the motor stops but voltage is applied, causing current to spike to the stall maximum. This causes rapid coil heating and risks driver damage.',
          'No-Load Condition: When spinning freely in the air, the current is at its minimum and speed is at its maximum.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 9. Common Use Cases'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '2WD and 4WD mobile robot wheels',
          'Miniature conveyor belt feeders',
          'Autonomous smart vehicle driving axles',
          'Educational robotics projects',
          'Heavy-lifting motorized winch drums'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 10. Common Failure Modes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Stall Overheating: Blocking the output shaft for more than a few seconds causes current to spike, melting internal coil insulation.',
          'Gear Stripping: Exceeding the maximum torque rating on plastic gears strips the teeth off, causing the motor to spin without turning the output shaft.',
          'Voltage Mismatch: Applying a voltage above the motor rating spins it faster but causes rapid brush wear and motor burnout.',
          'Underpowered Driver Selection: Selecting a motor driver that cannot supply the motor\'s full stall current leads to driver overheating and automatic shutdowns.',
          'Mechanical Overload: Designing a heavy robot that exceeds the gearbox\'s output torque, causing stalling and structural gear fatigue.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 11. Power Requirements'
      },
      {
        type: 'table',
        headers: ['Motor Class', 'Operating Voltage Range', 'Typical Load / Stall Current'],
        rows: [
          ['TT Toy Gear Motor', '3.0V – 6.0V', '100mA (no-load) to 800mA (stall)'],
          ['Metal Gear Motor (e.g. 25D/37D)', '6.0V – 12.0V', '500mA (load) to 3.0A+ (stall)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 12. Robotics Design Rule'
      },
      {
        type: 'paragraph',
        text: 'Always feed motors via an H-bridge driver directly connected to the battery. Never power a motor directly from the ESP32 GPIO pins, as it will permanently damage the microcontroller.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 13. Gear Ratio Concept'
      },
      {
        type: 'image',
        url: '/blog/8-dcmoter/dcmoter7.jpeg',
        caption: 'Figure 6: Gear Tooth Counts and Speed Reduction Ratio'
      },
      {
        type: 'paragraph',
        text: 'A 10:1 ratio means the motor shaft must rotate 10 times to turn the output shaft once. This decreases the output speed by 10 times while multiplying the output torque by 10 times (minus mechanical friction losses).'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'A DC gear motor is an electromechanical actuator that combines a DC motor with a reduction gearbox to trade rotational speed for increased torque, enabling efficient mechanical motion in robotics and embedded systems.'
      }
    ]
  },
  {
    id: 9,
    slug: 'hc-sr04-ultrasonic-sensor-guide',
    title: 'HC-SR04 Ultrasonic Distance Sensor - Non-Contact Range Measurement Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the HC-SR04 ultrasonic distance sensor: time-of-flight principles, 5V-to-3.3V logic level shifting, ESP32 integration, and environmental measurement limits.',
    coverImage: '/blog/9-ultrasonic/ultrasonic.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'HC-SR04 is a low-cost ultrasonic time-of-flight sensor that measures distance by emitting a 40 kHz sound pulse and calculating the time taken for the echo to return.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. Principle of Operation (Time-of-Flight)'
      },
      {
        type: 'image',
        url: '/blog/9-ultrasonic/ultrasonic1.jpeg',
        caption: 'Figure 1: Time-of-Flight sound reflection measurement principle'
      },
      {
        type: 'paragraph',
        text: 'The sensor transmits an ultrasonic burst which travels through the air, reflects off a target object, and returns to the receiver. By measuring the total transit duration, the microcontroller calculates the distance using the Speed of Sound (approx. 343 m/s at 20°C).'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Distance Calculation Formula'
      },
      {
        type: 'code',
        language: 'text',
        code: 'Distance = (Time elapsed × Speed of Sound) / 2'
      },
      {
        type: 'paragraph',
        text: 'Note: We divide by 2 because the acoustic wave travels to the object and back, covering double the actual distance.'
      },

      {
        type: 'image',
        url: '/blog/9-ultrasonic/ultrasonic2.jpeg',
        caption: 'Figure 2: Time-of-Flight sound reflection measurement principle'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 2. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Direction', 'Function / Pin Description'],
        rows: [
          ['VCC', 'Input', '5V positive power supply pin'],
          ['TRIG', 'Input', 'Trigger pin (microcontroller pulls HIGH for 10µs to start measurement)'],
          ['ECHO', 'Output', 'Echo output pin (outputs a 5V pulse whose width corresponds to the ToF)'],
          ['GND', 'Input', 'Common ground reference pin']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 3. Working Sequence'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Pulse Trigger: Senders drive the TRIG pin HIGH for exactly 10 microseconds.',
          'Sonic Transmission: Sensor hardware automatically generates 8 cycles of a 40 kHz ultrasonic burst.',
          'Acoustic Return: The sonic wave bounces off any solid obstacle and travels back.',
          'Pulse Output: The ECHO pin transitions to HIGH when the burst is sent, and drops back to LOW the instant the echo is received.',
          'MCU Measurement: The microcontroller measures the duration (pulse width) that the ECHO pin remains HIGH.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 4. Timing Diagram'
      },
      {
        type: 'image',
        url: '/blog/9-ultrasonic/ultrasonic3.jpeg',
        caption: 'Figure 2: HC-SR04 Trigger and Echo pulse width sequence'
      },
      {
        type: 'paragraph',
        text: 'Timing Sequence: TRIG Input (10µs pulse) -> Internal 8-cycle sonic burst -> ECHO Output (pulse width proportional to the distance of the obstacle).'
      },
      {
        type: 'heading',
        level: 2,
        text: '📏 5. Measurement Range'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Sensing Distance Range', '2 cm to 400 cm'],
          ['Measurement Resolution', 'approx. 3 mm'],
          ['Acoustic Frequency', '40 kHz'],
          ['Sensing Blind Zone', 'approx. 2 cm (too close to register)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. Robotics Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Obstacle avoidance and navigation routes',
          'Autonomous parking assistance and alarms',
          'Liquid level monitoring in water reservoirs',
          'Distance boundary tracking and wall-following algorithms',
          'Low-resolution spatial environment mapping mapping'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 7. ESP32 Integration Issue (Important)'
      },
      {
        type: 'image',
        url: '/blog/9-ultrasonic/ultrasonic4.jpeg',
        caption: 'Figure 3: Resistor Divider Level Shifting for 3.3V Logic Protection'
      },
      {
        type: 'paragraph',
        text: 'Critical Design Problem: The HC-SR04 runs at 5V logic, outputting a 5V pulse on the ECHO pin. The ESP32 pins are not 5V-tolerant (maximum 3.3V). Connecting them directly will burn the GPIO inputs. Senders must use a simple resistor divider to shift 5V to 3.3V.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 8. Wiring with ESP32'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• HC-SR04 VCC -> ESP32 5V (VIN)\n• HC-SR04 GND -> ESP32 GND\n• HC-SR04 TRIG -> ESP32 GPIO (output)\n• HC-SR04 ECHO -> 1kΩ Resistor -> ESP32 GPIO (input) & 2kΩ Resistor -> GND.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Common Problems'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Soft Materials: Absorptive surfaces (like cloth, sponges, or plush toys) absorb sound waves instead of reflecting them, causing false max-distance readings.',
          'Missing Reflection: Angled surfaces deflect the sound waves away from the receiver, resulting in no return signal.',
          'Power Noise: Inductive spikes from high-power DC motors disrupt the sensor registers. Mitigate this by separating logic and power rails and adding a 100µF capacitor across VCC/GND.',
          'Timing Errors: Blocking delays in the controller code distort the echo width measurement. Ensure timing uses hardware interrupts or non-blocking timer reads.'
        ]
      },
      {
        type: '🔬 10. Limitations (Important for Engineering)',
        level: 2,
        text: '🔬 10. Limitations (Important for Engineering)'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Measurements vary slightly with air temperature (sound speed shifts).',
          'Poor performance in windy environments due to deflection.',
          'Inaccurate distance reports on smooth angled surfaces.',
          'Low spatial resolution compared to active LiDAR scans.'
        ]
      }
    ]
  },
  {
    id: 10,
    slug: 'mpu6050-imu-sensor-guide',
    title: 'MPU6050 - 6-Axis IMU Sensor (Accelerometer + Gyroscope)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering overview of the MPU6050 6-axis inertial measurement unit: MEMS accelerometer and gyroscope registers, I2C telemetry, sensor fusion filters, and robotics orientation tracking.',
    coverImage: '/blog/10-mpu6050/mpu60501.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu6050.jpeg',
        caption: 'Figure 1: MPU6050 module Overview'
      },
      {
        type: 'paragraph',
        text: 'The MPU6050 is a 6-axis MEMS Inertial Measurement Unit (IMU) that combines a 3-axis accelerometer and a 3-axis gyroscope to measure motion, orientation, tilt, and angular velocity in real time.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What MPU6050 Measures'
      },
      {
        type: 'heading',
        level: 3,
        text: '(A) Accelerometer (3-axis)'
      },
      {
        type: 'paragraph',
        text: 'Measures linear acceleration along the X, Y, and Z axes. Used for tilt detection, movement direction, and gravity sensing.'
      },
      {
        type: 'heading',
        level: 3,
        text: '(B) Gyroscope (3-axis)'
      },
      {
        type: 'paragraph',
        text: 'Measures angular velocity (speed of rotation) around the X, Y, and Z axes. Used for rotation tracking, stabilization, and balancing systems.'
      },
      {
        type: 'paragraph',
        text: 'Combined: They form a complete 6-axis motion tracking system.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Structure'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu60502.jpeg',
        caption: 'Figure 2: MEMS Capacitive Accelerometer and Coriolis Gyroscope Die Structure'
      },
      {
        type: 'paragraph',
        text: 'Working Principles:\n• Accelerometer: Measures the displacement of a tiny silicon proof mass suspended by springs between capacitive plates.\n• Gyroscope: Detects angular rate of rotation utilizing the Coriolis effect on a vibrating capacitive micro-machined structure.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Function', 'Description'],
        rows: [
          ['VCC', 'Power Input', '3.3V to 5V (module features an onboard LDO regulator)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['SDA', 'I2C Serial Data', 'Serial data transfer line'],
          ['SCL', 'I2C Serial Clock', 'Serial clock sync line'],
          ['XDA', 'Auxiliary Data', 'Auxiliary I2C data (for connecting external magnetometer)'],
          ['XCL', 'Auxiliary Clock', 'Auxiliary I2C clock'],
          ['AD0', 'Address Selection', 'I2C Address LSB (LOW = 0x68, HIGH = 0x69)'],
          ['INT', 'Interrupt Output', 'Hardware interrupt pin to signal data ready']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 4. Communication (I2C)'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu60503.jpeg',
        caption: 'Figure 3: MPU6050 I2C Connections to ESP32 Microcontroller'
      },
      {
        type: 'paragraph',
        text: 'Default addresses: 0x68 (when AD0 is pulled LOW or left floating) or 0x69 (when AD0 is pulled HIGH).\nWiring path: MPU6050 VCC -> ESP32 3.3V, GND -> ESP32 GND, SDA -> ESP32 GPIO 21, and SCL -> ESP32 GPIO 22.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📐 5. What Data Looks Like'
      },
      {
        type: 'paragraph',
        text: 'The sensor outputs raw 16-bit signed integer values for each axis:\n• Accelerometer: Ax, Ay, Az (representing force in g-units)\n• Gyroscope: Gx, Gy, Gz (representing velocity in degrees per second)\n\nCritical Note: Raw values must undergo calibration offset subtraction to clear static errors.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 6. Motion Interpretation'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu60504.jpeg',
        caption: 'Figure 4: Pitch, Roll, and Yaw Orientation Angles'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu60505.jpeg',
        caption: 'Figure 5: Pitch, Roll, and Yaw Orientation Angles'
      },
      {
        type: 'table',
        headers: ['Orientation Angle', 'Rotational Axis', 'Physical Meaning'],
        rows: [
          ['Pitch', 'Y-Axis Rotation', 'Tilt forward and backward'],
          ['Roll', 'X-Axis Rotation', 'Tilt left and right side-to-side'],
          ['Yaw', 'Z-Axis Rotation', 'Horizontal rotational direction']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Robotics Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Self-Balancing Robots: Uses real-time tilt angle detection to trigger corrective wheel motor motions.',
          'Drone Stabilization: Monitors attitude and orientation to stabilize flight against wind drift.',
          'Gesture Control Devices: Tracks hand orientation and movements to generate input gestures.',
          'Robot Navigation Support: Complements encoders for dead reckoning navigation (limited by drift).'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 8. Key Advantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Extremely cost-effective IMU solution.',
          'Combines accelerometer and gyroscope on a single silicon die.',
          'Standard digital I2C output eliminates analog ADC issues.',
          'Widely supported by mature open-source software libraries.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Limitations (Important)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Gyroscope Drift: Integrating angular velocity over time causes accumulating errors (angle drifts indefinitely).',
          'No Absolute Position: Cannot detect absolute GPS coordinates or position tracking without external reference systems.',
          'Noise Sensitivity: High-frequency motor vibrations distort raw accelerometer data.',
          'Calibration Requirement: Requires static offset calibration to avoid persistent tilt errors.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 10. Sensor Fusion Requirement'
      },
      {
        type: 'image',
        url: '/blog/10-mpu6050/mpu60506.jpeg',
        caption: 'Figure 6: Sensor Fusion: Combining Gyroscope and Accelerometer Data'
      },
      {
        type: 'paragraph',
        text: 'To resolve gyroscope drift and accelerometer noise, senders use a Complementary Filter or Kalman Filter to combine the sensors:'
      },
      {
        type: 'code',
        language: 'text',
        code: 'Angle = 0.98 × (Angle + Gyro_rate × dt) + 0.02 × (Accel_angle)'
      },
      {
        type: 'paragraph',
        text: 'Effect: The gyroscope provides fast dynamic response, while the accelerometer supplies stable long-term gravity references, canceling out drift.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 11. Power Requirements'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Logic Operating Voltage', '3.3 V (recommended)'],
          ['Active Current Draw', 'approx. 3.8 mA'],
          ['Standby Current Draw', 'approx. 50 µA'],
          ['Communication Bus', 'I2C (up to 400 kHz clock speed)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧩 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The MPU6050 is a 6-axis MEMS inertial measurement unit that combines accelerometer and gyroscope data to estimate motion, tilt, and angular velocity through digital I2C communication for real-time embedded motion sensing applications.'
      }
    ]
  },
  {
    id: 11,
    slug: 'ir-line-tracking-sensor-guide',
    title: '4-Channel IR Line Tracking Sensor - Reflective Surface Detection Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering overview of 4-channel infrared line tracking arrays: TCRT5000 sensors, LM393 comparator calibration, output layout mapping, and navigation logic loops.',
    coverImage: '/blog/11-ir/ir.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The 4-channel IR line tracking sensor is an array of infrared reflective sensors that detect contrast between black and white surfaces to enable line-following behavior in robotics.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. How It Works (Reflective IR Principle)'
      },
      {
        type: 'image',
        url: '/blog/11-ir/ir1.jpeg',
        caption: 'Figure 1: Emitter IR LED and Phototransistor Reflection Principle'
      },
      {
        type: 'paragraph',
        text: 'Each channel consists of an IR LED transmitter and a photodiode/phototransistor receiver. The transmitter emits infrared light downwards. A white surface reflects the IR light back to the receiver (producing a HIGH digital signal), while a black line absorbs the IR light, resulting in no reflection (producing a LOW digital signal).'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Sensor Layout (4 Channels)'
      },
      {
        type: 'image',
        url: '/blog/11-ir/ir2.jpeg',
        caption: 'Figure 2: 4-Channel Sensor Array Alignment (S1, S2, S3, S4)'
      },
      {
        type: 'paragraph',
        text: 'The channels are arranged horizontally (S1, S2, S3, S4) across the bottom of the robot chassis. This allows the system to read different parts of the floor simultaneously and identify the exact line position.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Sensor Reading Interpretation Patterns'
      },
      {
        type: 'table',
        headers: ['Pattern (S1-S4)', 'Meaning / Interpretation'],
        rows: [
          ['0 0 1 1', 'The line is slightly to the right'],
          ['1 1 0 0', 'The line is slightly to the left'],
          ['0 1 1 0', 'The robot is centered directly over the line'],
          ['0 0 0 0', 'The robot has completely lost the line']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Description'],
        rows: [
          ['VCC', 'Power Input', 'Power supply input (3.3V – 5.0V compatible)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['OUT1', 'Digital Output', 'Output state for Channel 1 sensor'],
          ['OUT2', 'Digital Output', 'Output state for Channel 2 sensor'],
          ['OUT3', 'Digital Output', 'Output state for Channel 3 sensor'],
          ['OUT4', 'Digital Output', 'Output state for Channel 4 sensor']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 4. Working in Robotics'
      },
      {
        type: 'image',
        url: '/blog/11-ir/ir3.jpeg',
        caption: 'Figure 3: Navigation Loop: Sensing, Decision, and Motor Regulation'
      },
      {
        type: 'paragraph',
        text: 'Robotic control loop sequence:\n1. IR Sensors read ground contrast.\n2. ESP32 parses readings and runs decision logic.\n3. Motor Driver (e.g. TB6612FNG) receives speed/direction commands.\n4. Drive motors rotate to keep the robot centered on the path.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Steering Decision Rules'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'If line is left (left sensors detect LOW): Turn left to center.',
          'If line is right (right sensors detect LOW): Turn right to center.',
          'If centered (middle sensors detect LOW): Move forward.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 5. Sensor Types Used'
      },
      {
        type: 'paragraph',
        text: 'Most modules utilize TCRT5000 reflective optical sensors paired with an LM393 voltage comparator IC. The comparator converts the analog phototransistor voltage drop into a clean, noise-free digital HIGH or LOW output. Sensitivity thresholds can be fine-tuned via onboard potentiometers.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 6. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Operating Voltage', '3.3V to 5.0V'],
          ['Current Consumption', '20mA to 100mA active range'],
          ['Signal Output Type', 'Digital levels (HIGH/LOW or 0/1)'],
          ['Detection Range Height', 'approx. 1 cm to 3 cm from ground']
        ]
      },
      {
        type: '🔌 7. Calibration (Critical Step)',
        level: 2,
        text: '🔌 7. Calibration (Critical Step)'
      },
      {
        type: 'image',
        url: '/blog/11-ir/ir4.jpeg',
        caption: 'Figure 4: Potentiometer calibration and height adjustment'
      },
      {
        type: 'paragraph',
        text: 'Calibration Checklist:\n• Adjust the potentiometer screw until the indicator LED turns ON over white paper and OFF over black tape.\n• Mount the array exactly 5–10 mm above the ground for optimal contrast detection.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Common Problems'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'False Readings: Shiny floors reflect IR light even when black, causing false reflections. Sunlit rooms also trigger photodiode interference.',
          'Weak Line Detection: If the sensor array is mounted too high or too low, the light does not focus correctly on the phototransistor.',
          'Motor Noise: Voltage drops from DC motors can trigger logic glitches. Solve this by separating the motor power and adding noise filters.',
          'Uneven Surfaces: Bumps or tilts change the height dynamically, disrupting contrast readings.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 9. Power Design Considerations'
      },
      {
        type: 'image',
        url: '/blog/11-ir/ir5.jpeg',
        caption: 'Figure 5: Power Architecture: Regulated Logic and Isolated Motor Rails'
      },
      {
        type: 'paragraph',
        text: 'Always feed the IR sensor array from the regulated logic power rail (e.g. 5V output of LM2596 buck converter), never share the high-current motor supply rail, as inductive spikes will distort readings.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 10. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Line-following mobile robots',
          'Grid-based maze-solving robots',
          'Automated path-guided warehouse carts',
          'Basic industrial automated guided vehicles (AGVs)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 11. IR Sensor vs Other Navigation Sensors'
      },
      {
        type: 'table',
        headers: ['Sensor Type', 'Accuracy / Resolution', 'Primary Robotics Use Case'],
        rows: [
          ['IR Sensor Array', 'Medium resolution', 'Line following and contrast boundaries'],
          ['Ultrasonic Sensor', 'Low resolution', 'Non-contact obstacle detection'],
          ['Region Camera', 'High resolution', 'Autonomous navigation, lane tracking, object classification'],
          ['LiDAR Scanner', 'Very high resolution', 'Precision SLAM mapping and localization']
        ]
      }
    ]
  },
  {
    id: 12,
    slug: 'dht22-temp-humidity-sensor-guide',
    title: 'DHT22 Temperature & Humidity Sensor - Digital Environmental Monitoring Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering overview of the DHT22 digital temperature and humidity sensor: capacitive and thermistor principles, single-wire timing diagrams, ESP32 wiring, and environmental sampling limits.',
    coverImage: '/blog/12-dht22/dht22.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The DHT22 is a low-cost digital temperature and humidity sensor that uses capacitive humidity sensing and thermistor-based temperature measurement with a built-in signal processing chip.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What DHT22 Measures'
      },
      {
        type: 'heading',
        level: 3,
        text: '(A) Temperature'
      },
      {
        type: 'paragraph',
        text: 'Uses a Negative Temperature Coefficient (NTC) thermistor to measure ambient temperature in degrees Celsius (°C).'
      },
      {
        type: 'heading',
        level: 3,
        text: '(B) Humidity'
      },
      {
        type: 'paragraph',
        text: 'Uses a capacitive humidity sensor to measure relative humidity (%RH) in the surrounding air.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Principle'
      },
      {
        type: 'image',
        url: 'blog/12-dht22/dht221.jpeg',
        caption: 'Figure 1: Capacitive Humidity Sensor and Thermistor Measurement Die Structure'
      },
      {
        type: 'paragraph',
        text: 'How it works:\n• Humidity Sensing: Air moisture changes the dielectric constant, changing capacitance of the sensor element which is converted to an electrical signal.\n• Temperature Sensing: The resistance of the thermistor element drops as temperature rises (NTC principle).\n• Internal MCU: Integrates and converts these analog signals into a formatted digital data stream.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Number / Name', 'Type', 'Function'],
        rows: [
          ['VCC', 'Power Input', 'Power supply connection (3.3V – 5.5V range)'],
          ['DATA', 'Bi-directional Digital', 'Single-wire serial data communication line'],
          ['NC', 'No Connection', 'Not connected (often omitted in 3-pin modules)'],
          ['GND', 'Power Ground', 'Common ground reference connection']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Communication Protocol'
      },
      {
        type: 'image',
        url: '/blog/12-dht22/dht222.jpeg',
        caption: 'Figure 2: Start Signal and 40-bit Single-Wire Timing Sequence'
      },
      {
        type: 'paragraph',
        text: 'Data format consists of a 40-bit packet (16-bit humidity + 16-bit temperature + 8-bit checksum). Timing flow: The host MCU pulls the DATA pin LOW for at least 18ms (start signal), then releases it; the sensor responds by pulling the line LOW for 80µs and HIGH for 80µs before transmitting the data bits in timed pulses.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 5. Specifications'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Temperature Range', '-40°C to +80°C'],
          ['Humidity Range', '0% to 100% Relative Humidity (RH)'],
          ['Measurement Accuracy', '±0.5°C Temperature / ±2–5% RH Humidity'],
          ['Sensor Sampling Rate', 'approx. 0.5 Hz (minimum interval of 2 seconds)'],
          ['Operating Voltage', '3.3 V to 5.5 V']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. Applications in Robotics & IoT'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Automatic weather station monitoring nodes',
          'Greenhouse climate regulation loops',
          'Smart home automation and HVAC control systems',
          'Environmental logger modules in payload-bay robotics',
          'IoT web dashboards via MQTT or HTTP publishing channels'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 7. ESP32 Wiring'
      },
      {
        type: 'image',
        url: '/blog/12-dht22/dht223.jpeg',
        caption: 'Figure 3: DHT22 to ESP32 Wiring and Pull-up Resistor Schematic'
      },
      {
        type: 'paragraph',
        text: 'Wiring path: DHT22 VCC -> ESP32 3.3V or 5V, DHT22 GND -> ESP32 GND, and DHT22 DATA -> ESP32 GPIO (e.g. GPIO 4).\n\nCritical Requirement: Always connect a 4.7kΩ to 10kΩ pull-up resistor between the DATA line and the VCC line. This maintains a HIGH state on the single-wire bus during idle periods.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Limitations (Critical Engineering Reality)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Slow Sampling Rate: A minimum 2-second interval (0.5 Hz) between readings prevents fast real-time monitoring.',
          'Unsuited for Fast Changes: Slow response times make it poor for fast airflow, turbulence, or immediate climate feedback loop tracking.',
          'Noise Vulnerability: Single-wire signals are prone to EMI; long cables (above 20m) trigger checksum corruption without proper shielding.',
          'Limited Precision: Not suitable for scientific or high-end industrial-grade humidity sensing applications.',
          'Blocking Reads: Reading routines require precise timing delays that can block host microcontroller threads unless run in a separate FreeRTOS task.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 9. Power Considerations'
      },
      {
        type: 'paragraph',
        text: 'Active current draw is very low (approx. 1.0–2.5 mA during conversion), dropping down to 100–150 µA in standby/sleep mode. This makes the DHT22 highly efficient for battery-operated IoT nodes and remote telemetry systems.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 10. DHT11 vs DHT22'
      },
      {
        type: 'table',
        headers: ['Specification / Feature', 'DHT11 Sensor', 'DHT22 Sensor'],
        rows: [
          ['Temperature Range', '0°C to 50°C', '-40°C to +80°C'],
          ['Humidity Range', '20% to 90% RH', '0% to 100% RH'],
          ['Measurement Accuracy', '±2°C / ±5% RH', '±0.5°C / ±2% RH'],
          ['Resolution', '8-bit data outputs', '16-bit data outputs'],
          ['Component Price Class', 'Lower cost / cheapest option', 'Slightly higher cost / superior accuracy']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The DHT22 is a digital environmental sensor combining capacitive humidity measurement and thermistor-based temperature sensing with onboard signal conditioning and a proprietary single-wire digital communication protocol.'
      }
    ]
  },
  {
    id: 13,
    slug: 'mq2-gas-sensor-guide',
    title: 'MQ-2 Gas Sensor - Smoke, LPG, Methane & Hydrogen Detection Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the MQ-2 semiconductor gas sensor: SnO2 chemistry, heating coil operations, analog and digital threshold comparator registers, and ESP32 level-shifting wiring.',
    coverImage: '/blog/13-mq2/mq.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The MQ-2 is a semiconductor gas sensor that detects combustible gases and smoke using a heated SnO₂ (tin dioxide) sensing layer whose resistance changes when exposed to gas molecules.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What MQ-2 Detects'
      },
      {
        type: 'paragraph',
        text: 'The MQ-2 responds to multiple gases in its environment:\n• LPG (propane, butane)\n• Methane (CH₄)\n• Hydrogen (H₂)\n• Alcohol vapor\n• Smoke'
      },
      {
        type: 'paragraph',
        text: '⚠️ Important Warning: It is not specific and does NOT distinguish between these gases internally.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Principle'
      },
      {
        type: 'image',
        url: '/blog/13-mq2/mq1.jpeg',
        caption: 'Figure 1: SnO2 Semiconductor Layer and Heating Element Principle'
      },
      {
        type: 'paragraph',
        text: 'How it works:\n1. Heater Coil: Keeps the internal sensor at a high temperature (approx. 200–300°C).\n2. SnO₂ Layer: Oxygen molecules attach to the sensor surface, trapping electrons and creating high resistance.\n3. Gas Exposure: Combustible gases react with the oxygen, releasing trapped electrons back and dropping the resistance.'
      },
      {
        type: 'paragraph',
        text: 'Output relationship: Higher gas concentration leads to lower electrical resistance and a corresponding change in the output voltage.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Description'],
        rows: [
          ['VCC', 'Power Input', 'Power supply connection (5V required for heater coil)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['AO', 'Analog Output', 'Analog output voltage (proportional to gas concentration)'],
          ['DO', 'Digital Output', 'Digital threshold output (set via onboard comparator)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Analog vs Digital Output'
      },
      {
        type: 'image',
        url: '/blog/13-mq2/mq2.jpeg',
        caption: 'Figure 2: Analog vs Digital Output'
      },
      {
        type: 'paragraph',
        text: 'The module offers two output options:\n• Analog Output (AO): Outputs a continuous voltage curve corresponding to gas concentrations. Used for general ppm estimations.\n• Digital Output (DO): Uses an LM393 comparator to output a HIGH/LOW state when gas levels cross a threshold adjusted via the onboard potentiometer.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 5. Warm-Up Time (Critical)'
      },
      {
        type: 'image',
        url: '/blog/13-mq2/mq3.jpeg',
        caption: 'Figure 3: MQ-2 to ESP32 Wiring and Pull-up Resistor Schematic'
      },
      {
        type: 'paragraph',
        text: 'Critical Operating Rule: The MQ-2 requires a warm-up period (at least 1–5 minutes for routine operation, and up to 24 hours prior to first-use calibration). Operating the sensor cold leads to unstable readings, false alarms, and random voltage spikes.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Domestic kitchen gas leak alarm systems',
          'Industrial fire and smoke detection nodes',
          'IoT environmental hazard safety monitoring',
          'Smart home safety alarm hubs',
          'Robotics hazardous gas detection payloads'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 7. ESP32 Wiring'
      },
      {
        type: 'image',
        url: '/blog/13-mq2/mq4.jpeg',
        caption: 'Figure 4: MQ-2 to ESP32 Wiring and Voltage Divider Map'
      },
      {
        type: 'paragraph',
        text: 'Wiring path: MQ-2 VCC -> External 5V supply, MQ-2 GND -> ESP32 GND, and MQ-2 AO -> Resistor Divider -> ESP32 ADC pin (e.g. GPIO 34).\n\n⚠️ Important safety note: The ESP32 ADC inputs are rated for a maximum of 3.3V, whereas the MQ-2 analog output can reach 5V. Senders must use a voltage divider (e.g. 10kΩ and 20kΩ) to scale the signal safely.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 8. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Operating Voltage', '5.0 V (required for heater operation)'],
          ['Heater Current Draw', 'approx. 150 mA'],
          ['Gas Detection Range', 'approx. 200 ppm to 10,000 ppm'],
          ['Output Signal Type', 'Simultaneous Analog + Digital levels']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Limitations (Very Important)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Lack of Specificity: Cannot identify which specific gas triggered the alarm (e.g., cannot distinguish LPG from methane).',
          'Calibration Drift: Sensing layers degrade and drift over time, requiring periodic manual recalibration.',
          'Environmental Sensitivity: Ambient temperature and relative humidity alter the sensor\'s response curves.',
          'Slow Response: The physical heater and oxide layer reactions take several seconds to stabilize under gas exposure.',
          'High Power Draw: The 150mA heater current makes the MQ-2 challenging to power off small batteries for long periods.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Calibration Concept'
      },
      {
        type: 'image',
        url: '/blog/13-mq2/mq5.jpeg',
        caption: 'Figure 3: Finding Ro Clean Air Reference Resistance Curve'
      },
      {
        type: 'paragraph',
        text: 'Calibration relies on defining Ro (the sensor resistance in clean air). Senders measure the clean air resistance, then calculate Rs (sensor resistance in gas exposure) and plot the Rs/Ro ratio against manufacturer curves to estimate gas concentrations.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The MQ-2 is a heated metal-oxide semiconductor gas sensor that detects combustible gases and smoke by measuring changes in electrical resistance caused by surface chemical reactions on a SnO₂ sensing layer.'
      }
    ]
  },
  {
    id: 14,
    slug: 'inmp441-microphone-guide',
    title: 'INMP441 - I2S Digital MEMS Microphone Module (ESP32 Audio Input)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the INMP441 digital MEMS microphone: MEMS acoustic diaphragm, direct I2S protocol, stereo/mono frame formats, ESP32 wiring, and voice assistant wake-word processing.',
    coverImage: '/blog/14-inmp441/inmp441.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'image',
        url: '/blog/14-inmp441/inmp4411.jpeg',
        caption: 'Figure 1: MEMS Diaphragm Capacitance to I2S Audio Pipeline'
      },
      {
        type: 'paragraph',
        text: 'The INMP441 is a digital MEMS microphone that outputs 24-bit audio using the I2S protocol directly to a microcontroller like ESP32, without needing ADC conversion.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What INMP441 Actually Does'
      },
      {
        type: 'paragraph',
        text: 'It captures real audio signals and converts them into digital samples: Sound waves -> MEMS diaphragm -> electrical signal -> ADC -> I2S digital stream.\n\nKey point: Unlike MQ-2 or DHT22, the INMP441 produces a continuous audio data stream, not simple HIGH/LOW values.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Principle'
      },
      {
        type: 'image',
        url: '/blog/14-inmp441/inmp4412.jpeg',
        caption: 'Figure 1: MEMS Diaphragm Capacitance to I2S Audio Pipeline'
      },
      {
        type: 'paragraph',
        text: 'How it works:\n1. MEMS Diaphragm: Sound pressure moves a tiny membrane.\n2. Capacitor Change: Distance changes capacitance.\n3. Internal ADC: Converts analog vibration to digital samples.\n4. I2S Output: Sends PCM audio stream directly to ESP32.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Function'],
        rows: [
          ['VDD', 'Power Input', 'Power supply connection (1.8V – 3.3V; usually 3.3V)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['SCK', 'Input Clock', 'Bit clock (BCLK)'],
          ['WS', 'Input Clock', 'Word select (LRCLK / Frame selector)'],
          ['SD', 'Digital Output', 'Serial audio data output stream'],
          ['L/R', 'Configuration', 'Channel select (LOW = Left channel, HIGH = Right channel)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 4. I2S Communication (Critical Concept)'
      },
      {
        type: 'image',
        url: '/blog/14-inmp441/inmp4413.jpeg',
        caption: 'Figure 2: SCK, WS, and SD Signal Timing for 24-bit Stereo Frames'
      },
      {
        type: 'table',
        headers: ['Signal', 'Meaning / Description'],
        rows: [
          ['BCLK (SCK)', 'Bit clock pulses indicating when to sample each data bit'],
          ['WS', 'Left/right frame selector, switching between audio channels'],
          ['SD', 'Audio data stream containing the digital bits']
        ]
      },
      {
        type: 'paragraph',
        text: 'Data format: Outputs 24-bit audio samples structured in a stereo frame structure (even if it is a mono microphone).'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 5. ESP32 Wiring (Standard)'
      },
      {
        type: 'image',
        url: '/blog/14-inmp441/inmp4414.jpeg',
        caption: 'Figure 3: INMP441 to ESP32 I2S Interfacing Wiring Connections'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• INMP441 VDD -> ESP32 3.3V\n• INMP441 GND -> ESP32 GND\n• INMP441 SCK -> ESP32 GPIO 14\n• INMP441 WS -> ESP32 GPIO 15\n• INMP441 SD -> ESP32 GPIO 32\n• INMP441 L/R -> ESP32 GND (selects Left channel)\n\n⚠️ Note: ESP32 pins are highly flexible, and I2S pins can be mapped to almost any free GPIO.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. What You Can Build'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Voice Assistant Nodes: Performing wake word detection and command recording.',
          'Sound Level Monitoring: Measuring decibels and environmental noise profiles.',
          'Smart Home Control: Sound-triggered routines and command inputs.',
          'IoT Audio Streaming: Broadcasting live audio streams over network connections.',
          'Noise Detection Systems: Triggering alarms on sudden volume threshold breaks.',
          'Edge AI Voice Preprocessing: Filtering and conditioning raw voice feeds prior to cloud transcription.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 7. Key Advantages'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Direct digital output eliminates analogue noise issues.',
          'High Signal-to-Noise Ratio (SNR ~61 dB).',
          'Low power consumption (approx. 1.4 mA active).',
          'Highly stable readings compared to analogue mic modules.',
          'Direct ESP32 I2S peripheral compatibility.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Limitations (Important Reality Check)'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Not Standalone Intelligence: Does not process speech or recognize words locally; only outputs raw digital audio samples.',
          'Requires I2S Configuration: Setting incorrect clock frequencies or word widths results in silence or garbage values.',
          'Complex Driver Setup: Requires configuring ESP32 I2S drivers (using ESP-IDF or Arduino I2S libraries) rather than standard analogRead.',
          'Wiring Sensitivity: Swapping SCK/WS pins outputs noise, and leaving L/R floating triggers channel selection confusion.',
          'Difficult Debugging: Raw binary audio stream is not readable on standard serial monitors without graphing or recording tools.'
        ]
      },
      {
        type: '🔌 9. Common Failure Symptoms',
        level: 2,
        text: '🔌 9. Common Failure Symptoms'
      },
      {
        type: 'table',
        headers: ['Symptom', 'Likely Cause', 'Resolution'],
        rows: [
          ['Constant loud noise', 'Incorrect I2S clock or bit-width settings', 'Verify configuration registers'],
          ['Flatline / zero signal', 'Incorrect pin mapping or missing clocks', 'Check wiring paths and SCK activity'],
          ['No response at all', 'Power supply issue or WS/SCK error', 'Verify VDD matches 3.3V and GND is connected'],
          ['Static bursts / clicks', 'Buffer overflow or data misalignment', 'Increase DMA buffer sizes and verify bit alignment']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The INMP441 is a MEMS-based digital microphone that converts acoustic pressure into PCM audio streams using an internal ADC and outputs synchronized I2S data for direct processing by microcontrollers.'
      }
    ]
  },
  {
    id: 15,
    slug: 'max98357a-amplifier-guide',
    title: 'MAX98357A - I2S Class-D Audio Amplifier (ESP32 Audio Output Module)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the MAX98357A digital Class-D audio amplifier: I2S-to-PWM conversion pipeline, pinout configurations, ESP32 wiring, full I2S audio architecture, and noise reduction tips.',
    coverImage: '/blog/15-max98357a/max98357a.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'The MAX98357A is a digital I2S-to-Class-D audio amplifier that directly converts PCM digital audio streams into high-efficiency PWM power signals to drive a speaker.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Problem It Solves'
      },
      {
        type: 'paragraph',
        text: 'In ESP32 audio systems (ESP32 -> I2S digital audio -> speaker), the ESP32 alone cannot drive a speaker. The MAX98357A acts as a combined digital audio receiver, DAC, and power amplifier.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Pipeline'
      },
      {
        type: 'image',
        url: '/blog/15-max98357a/max98357a1.jpeg',
        caption: 'Figure 1: I2S Digital PCM to Class-D Speaker Output Modulator Pipeline'
      },
      {
        type: 'paragraph',
        text: 'Signal flow: I2S (ESP32) -> Digital PCM input -> Internal DAC -> Class-D PWM modulation -> Speaker output.\n\nKey idea: The speaker itself smooths the PWM signal due to its coil inductance.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Function'],
        rows: [
          ['VIN', 'Power Input', 'Power supply connection (3.3V – 5.5V)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['BCLK', 'Input Clock', 'Bit clock (I2S clock)'],
          ['LRC', 'Input Clock', 'Word select (left/right clock)'],
          ['DIN', 'Digital Input', 'Audio data input stream'],
          ['GAIN', 'Configuration', 'Amplification level configuration pin'],
          ['SD', 'Input Control', 'Shutdown control / channel selector']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Supply Voltage Range', '2.5V – 5.5V'],
          ['Output Power', 'Up to ~3.2W (with 5V supply, 4Ω speaker)'],
          ['Amplifier Efficiency', '~90%+ Class-D efficiency'],
          ['Supported Sample Rates', '8 kHz – 96 kHz'],
          ['Compatible Bit Depths', '16-bit, 24-bit, and 32-bit PCM']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 5. ESP32 Wiring (Standard Setup)'
      },
      {
        type: 'image',
        url: '/blog/15-max98357a/max98357a2.jpeg',
        caption: 'Figure 2: MAX98357A to ESP32 standard I2S Wiring Map'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• MAX98357A VIN -> ESP32 5V (VIN)\n• MAX98357A GND -> ESP32 GND\n• MAX98357A BCLK -> ESP32 GPIO 26\n• MAX98357A LRC -> ESP32 GPIO 25\n• MAX98357A DIN -> ESP32 GPIO 22\n\n⚠️ Important note: All I2S GPIOs are fully configurable in software but must match the I2S config in the firmware.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 6. Full Audio System Architecture (Typical)'
      },
      {
        type: 'image',
        url: '/blog/15-max98357a/max98357a3.jpeg',
        caption: 'Figure 3: Bidirectional Voice Processing Architecture'
      },
      {
        type: 'paragraph',
        text: 'Signal pipeline: INMP441 Microphone (I2S Input) -> ESP32 Processing -> MAX98357A Amplifier (I2S Output) -> Speaker.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Use Cases'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Voice Assistant Devices: Handing local speech feedback playing response files.',
          'Smart Home Audio Alerts: Generating alarm sounds and chime cues.',
          'Robot Voice Feedback Systems: Giving mobile platforms expressive vocal queues.',
          'IoT Notification Speakers: Sounding sirens on threshold alarms.',
          'Audio Playback Nodes: Streaming files from microSD cards or WiFi streams.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Engineering Limitations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Mono Output Only: Most basic modules are single channel (requires wiring two boards for stereo).',
          'Not a General Amplifier: Only accepts digital I2S inputs; cannot amplify analog signals.',
          'Power Sensitivity: Low voltage results in audio distortion, and insufficient current triggers ESP32 brownout resets.',
          'Speaker Restrictions: Strictly supports 4Ω or 8Ω speakers; cannot drive large passive loads.',
          'Real-World Noise Issues: Prone to noise from poor grounding, long I2S wires, or unstable power supplies.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 9. Common Beginner Mistakes'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '❌ Wrong Assumption: Attempting to connect analog audio input signals (will NOT work).',
          '❌ Wrong Wiring: Swapping BCLK and LRC clock pins (causes complete silence or static noise).',
          '❌ Weak Power Supply: Powering the module from the ESP32 3.3V output (triggers brownouts under speaker load).',
          '❌ Missing Common Ground: Forgetting a common ground connection (results in distorted or absent output).'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The MAX98357A is a digital I2S audio receiver combined with a DAC and Class-D power stage that converts PCM audio streams into high-efficiency PWM-driven speaker output suitable for embedded systems like ESP32.'
      }
    ]
  },
  {
    id: 16,
    slug: 'active-buzzer-guide',
    title: 'Active Buzzer — Self-Oscillating Sound Output Module for Embedded Systems',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of active buzzer modules: internal oscillator circuitry, piezo sound generation mechanisms, digital ON/OFF control loops, and comparative analysis with passive buzzers.',
    coverImage: '/blog/16-buzzer/buzzer.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'An active buzzer is a self-oscillating electromechanical sound generator that produces a fixed-frequency tone when powered with DC voltage.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Makes It “Active”'
      },
      {
        type: 'paragraph',
        text: 'Active Buzzer Features:\n• Has an internal oscillator circuit.\n• Only needs DC power (ON/OFF control).\n• Power ON -> sound ON.\n• Power OFF -> silence.\n\nPassive Buzzer (contrast): Requires a PWM signal from the host microcontroller; frequency is controlled externally.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Principle'
      },
      {
        type: 'image',
        url: '/blog/16-buzzer/buzzer1.jpeg',
        caption: 'Figure 1: Internal Oscillator and Piezo Vibration Diaphragm Principle'
      },
      {
        type: 'paragraph',
        text: 'Sound generation pipeline: DC voltage applied -> internal oscillator activates -> piezo disc vibrates -> air pressure waves generated -> audible sound output.\n\nKey point: It generates a fixed frequency tone internally (commonly ~2–4 kHz).'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Function'],
        rows: [
          ['VCC', 'Power Input', 'Power supply connection (3.3V – 5V)'],
          ['GND', 'Power Ground', 'Common ground reference connection'],
          ['I/O or S', 'Digital Input', 'Control signal (ON = HIGH, OFF = LOW; sometimes optional)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Electrical Behavior'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Operating Voltage: 3.3V–5V typical range.',
          'Current Consumption: ~10–30 mA active current draw.',
          'Resonant Frequency: Fixed frequency (not programmable in software).',
          'Output Signal: Continuous single tone.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 5. How It Works in Microcontrollers'
      },
      {
        type: 'image',
        url: '/blog/16-buzzer/buzzer2.jpeg',
        caption: 'Figure 2: GPIO Input Signal to Piezo Audio Output State Map'
      },
      {
        type: 'paragraph',
        text: 'Control logic loop: GPIO HIGH -> buzzer ON; GPIO LOW -> buzzer OFF.\n\nExample scenarios:\n• Fire detected -> buzzer ON\n• Gas leak -> buzzer ON\n• Robot error -> buzzer ON'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 6. Active vs Passive Buzzer'
      },
      {
        type: 'table',
        headers: ['Feature', 'Active Buzzer', 'Passive Buzzer'],
        rows: [
          ['Internal Oscillator', 'Yes', 'No'],
          ['Needs PWM Input', 'No', 'Yes (requires AC or square wave signal)'],
          ['Sound Output Control', 'Fixed tone output', 'Programmable frequencies / melodies'],
          ['Coding Complexity', 'Very easy (digitalWrite only)', 'Medium (requires tone() or PWM clocks)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Robot collision warning and proximity indicators.',
          'Gas leak and smoke detector alarm units.',
          'IoT alert notification nodes.',
          'Security system alarm modules.',
          'Reverse parking assistant sensors.',
          'Boot-up and critical error status indicator beeps.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Limitations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Fixed Tone Only: Cannot play complex melodies, songs, or speech audio.',
          'No Frequency Tuning: The pitch cannot be modulated by software duty cycles.',
          'Unsuitable for Audio Output: Cannot replace speakers or DAC output channels.',
          'Annoying in Continuous Alarms: Lacks any volume or frequency modulation flexibility.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔋 9. Power Considerations'
      },
      {
        type: 'paragraph',
        text: 'Because active buzzers draw very low power (~10–30 mA), they can often be directly driven by standard GPIO pins on most microcontrollers. However, for high-volume or industrial-grade buzzers, senders should use a simple NPN transistor driver (e.g. 2N2222) to protect the MCU from overcurrent.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Common Wiring (ESP32 Example)'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• Buzzer VCC -> ESP32 3.3V or 5V\n• Buzzer GND -> ESP32 GND\n• Buzzer SIG -> ESP32 GPIO 23\n\n⚠️ Note: If using a high-current buzzer module, wire it through an NPN transistor switch circuit driven by GPIO 23.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 11. Common Mistakes'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '❌ Confusing active vs passive buzzers: Active buzzers only support ON/OFF control; passive buzzers require continuous PWM frequency blocks.',
          '❌ Direct high current drive: Driving a buzzer directly from a GPIO pin that requires more than 40mA will damage the MCU registers.',
          '❌ No common ground reference: Forgetting a common ground link yields no sound or highly unstable volume levels.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'An active buzzer is a self-contained oscillating acoustic transducer that converts DC electrical power into a fixed-frequency audible signal using an internal electronic oscillator and piezoelectric or electromagnetic vibration mechanism.'
      }
    ]
  },
  {
    id: 17,
    slug: 'ssd1306-oled-guide',
    title: 'SSD1306 OLED Display - 0.96" I2C Monochrome Display Module',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of SSD1306 OLED monochrome display modules: self-emissive organic LEDs, GDDRAM frame buffer architectures, I2C rendering cycles, and minimal UI design.',
    coverImage: '/blog/17-oled/oled.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'SSD1306 OLED is a low-power monochrome organic LED display controller that drives a 128×64 pixel matrix using I2C or SPI communication for embedded UI and sensor visualization.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Makes SSD1306 Important'
      },
      {
        type: 'paragraph',
        text: 'Key differences compared to traditional LCDs:\n• No backlight required: Each pixel is an individual light source.\n• Self-emissive pixels: Emits its own light, significantly reducing power draw when displaying dark frames.\n• High contrast: Extremely high contrast ratios, readable in dark environments.\n• Wide viewing angles: Excellent visibility from side angles.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Display Structure'
      },
      {
        type: 'image',
        url: '/blog/17-oled/oled1.jpeg',
        caption: 'Figure 1: 128x64 Pixel Matrix Structure and Row-Column Mapping'
      },
      {
        type: 'image',
        url: '/blog/17-oled/oled2.jpeg',
        caption: 'Figure 2: 128x64 Pixel Matrix Structure and Row-Column Mapping'
      },
      {
        type: 'paragraph',
        text: 'Resolution: 128 columns × 64 rows = 8192 pixels.\n\nMemory Model: Features an internal Graphic Display Data RAM (GDDRAM) buffer. The microcontroller writes pixel states to this memory, which is then mapped directly to the screen pixels.'
      },
      {
        type: 'heading',
        level: 3,
        text: '🔌 3. Pin Configuration (I2C Version)'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Function'],
        rows: [
          ['VCC', 'Power Input', 'Power supply connection (3.3V – 5V)'],
          ['GND', 'Power Ground', 'Common ground connection'],
          ['SDA', 'Bi-directional Digital', 'I2C Serial Data line'],
          ['SCL', 'Input Clock', 'I2C Serial Clock line']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 4. Communication (I2C)'
      },
      {
        type: 'paragraph',
        text: 'Default I2C Addresses:\n• 0x3C (most common address for 0.96" modules).\n• 0x3D (alternative address selected by altering the onboard address jumper select resistor).'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 5. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Value / Specification'],
        rows: [
          ['Operating Voltage', '3.3 V to 5.0 V range'],
          ['Current Consumption', 'approx. 20 mA to 40 mA (dependent on active pixels)'],
          ['Serial Interface', 'I2C / SPI (depending on module version)'],
          ['Resolution Grid', '128 columns × 64 rows']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. ESP32 Wiring'
      },
      {
        type: 'image',
        url: '/blog/17-oled/oled3.jpeg',
        caption: 'Figure 3: SSD1306 to ESP32 standard I2C wiring connection'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• SSD1306 VCC -> ESP32 3.3V\n• SSD1306 GND -> ESP32 GND\n• SSD1306 SDA -> ESP32 GPIO 21\n• SSD1306 SCL -> ESP32 GPIO 22\n\n⚠️ Note: Most SSD1306 modules feature onboard 4.7kΩ pull-up resistors on the SDA and SCL lines. ESP32 I2C pins are fully reconfigurable in software.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 7. How It Displays Data'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Sensor telemetry (displaying real-time temperature, gas levels, distance readings).',
          'Robot status indicator (boot screens, battery meters, navigation modes).',
          'Local debugging console (printing status logs, warning messages).',
          'Mini dashboards (compact graphs, menu options, user interaction prompts).'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 8. Rendering Model'
      },
      {
        type: 'image',
        url: '/blog/17-oled/oled4.jpeg',
        caption: 'Figure 4: Graphic Buffer Update and Screen Refresh Loop'
      },
      {
        type: 'paragraph',
        text: 'Render loop sequence:\n1. Microcontroller computes text or shape calculations.\n2. Writes pixel updates into the local RAM buffer.\n3. Transmits the full buffer via I2C to the SSD1306.\n4. SSD1306 refreshes the pixels on the display screen.\n\nCritical Note: No direct individual pixel write is possible on the display itself; all pixels must be managed via the local RAM buffer before sending.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Limitations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Monochrome Display: Lacks color support; limited to single color layouts (usually white, blue, or yellow/blue split).',
          'Low Refresh Rates: Unsuitable for high-speed video streams or rapid graphic animations.',
          'Minimal Physical Size: Standard screen is 0.96 inches, requiring minimalist UI text designs.',
          'Memory Draw: Maintaining the display buffer consumes exactly 1 KB of RAM from the host microcontroller.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Common Issues'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '❌ Blank screen: Verify the exact I2C address (0x3C vs 0x3D) and check VCC/GND connections.',
          '❌ Unresponsive display: Ensure external pull-up resistors are installed if the module lacks them, or check SDA/SCL lines.',
          '❌ Garbled graphics: Triggered by writing values outside the display buffer boundary or corrupting buffer indexes.',
          '❌ Extreme flickering: Caused by clearing and rewriting the entire screen too frequently in the main loop instead of updating only changed areas.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 11. Robotics & IoT Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Miniature robot status dashboards.',
          'Portable IoT environmental monitors.',
          'Dynamic battery charging level indicators.',
          'Local hardware diagnostic consoles.',
          'Smart home thermostat controllers.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The SSD1306 is a low-power monochrome OLED display controller managing a 128×64 pixel self-emissive organic LED grid using internal frame memory buffering and serial I2C/SPI communication for embedded visualization systems.'
      }
    ]
  },
  {
    id: 18,
    slug: 'ws2812b-led-guide',
    title: 'WS2812B LED Strip - Addressable RGB Pixel System (NeoPixel Class)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of WS2812B addressable RGB LED strips: integrated control ICs, high-speed single-wire protocols, power distribution safety guidelines, and logic-level shifting.',
    coverImage: '/blog/18-ws2812b/ws2812b.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'WS2812B is a chain of individually addressable RGB LEDs, each containing an integrated control IC that receives serial data and forwards remaining data to the next pixel.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Makes WS2812B Special'
      },
      {
        type: 'paragraph',
        text: 'Each addressable pixel package integrates three emitter components and a controller:\n• Red LED emitter element.\n• Green LED emitter element.\n• Blue LED emitter element.\n• Built-in driver IC (managing PWM duty cycles internally).\n\nControl flow: Microcontroller -> serial data -> LED 1 -> LED 2 -> LED 3 -> ...'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Working Principle'
      },
      {
        type: 'image',
        url: '/blog/18-ws2812b/ws2812b1.jpeg',
        caption: 'Figure 1: Internal Control IC and GRB Pixel Data Propagation'
      },
      {
        type: 'paragraph',
        text: 'Data Decoding Process:\n1. Read first block: Each pixel IC reads the first 24 bits of color data (GRB format) arriving on its DIN pin.\n2. Store states: The internal registers store the color values to drive its local red, green, and blue PWM outputs.\n3. Reshape and forward: The IC reshapes and re-transmits the remaining data stream out of its DOUT pin to the next pixel in the chain.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Data format (24-bit per pixel):'
      },
      {
        type: 'table',
        headers: ['Component Channel', 'Bit Representation'],
        rows: [
          ['Green Channel', 'G7 G6 G5 G4 G3 G2 G1 G0 (8 bits)'],
          ['Red Channel', 'R7 R6 R5 R4 R3 R2 R1 R0 (8 bits)'],
          ['Blue Channel', 'B7 B6 B5 B4 B3 B2 B1 B0 (8 bits)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Function / Pin Description'],
        rows: [
          ['5V', 'Power Input', 'Power supply connection (5V positive input)'],
          ['GND', 'Power Ground', 'Common ground reference connection'],
          ['DIN', 'Digital Input', 'Serial data input stream from controller or preceding pixel'],
          ['DOUT', 'Digital Output', 'Serial data output stream connecting to the next pixel DIN']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Operating Voltage', '5.0 V DC typical'],
          ['Full White Current Draw', 'approx. 60 mA per pixel (all channels at full brightness)'],
          ['Communication Protocol', 'Single-wire high-speed digital pulse-width protocol'],
          ['Color Bit Depth', '24-bit total (16.7 million colors)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔥 5. Power Reality (Critical)'
      },
      {
        type: 'paragraph',
        text: 'Because addressable LEDs can draw significant current, power budget calculations are essential for safe system design:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '30 LEDs: 30 × 60mA = 1.8 A (maximum current draw).',
          '100 LEDs: 100 × 60mA = 6.0 A (maximum current draw).',
          'This is why proper power architecture and gauge wiring are critical to prevent fire hazards.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 6. ESP32 Wiring'
      },
      {
        type: 'image',
        url: '/blog/18-ws2812b/ws2812b2.jpeg',
        caption: 'Figure 2: WS2812B Wiring to ESP32 with protection components'
      },
      {
        type: 'paragraph',
        text: 'Wiring path:\n• WS2812B 5V -> External 5V Power Supply (+)\n• WS2812B GND -> Common Ground (linked to ESP32 GND and external supply GND)\n• WS2812B DIN -> 330Ω Resistor -> ESP32 GPIO 5 (or any digital pin)\n\nCritical Rule: Never power an addressable strip directly from the ESP32 5V pin, as current draw will instantly blow the internal traces or regulator.\n\nRecommended Protection:\n1. 330Ω resistor placed on the DIN data line to prevent voltage spikes from damaging the first pixel.\n2. 1000µF capacitor connected across the 5V power rails near the strip to smooth voltage dips under rapid color transitions.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 7. Communication Protocol'
      },
      {
        type: 'image',
        url: '/blog/18-ws2812b/ws2812b3.jpeg',
        caption: 'Figure 3: Timing encoding for logical 0 and 1 bits'
      },
      {
        type: 'paragraph',
        text: 'Data bits are encoded using precise HIGH/LOW pulse widths:\n• Bit 0: Short HIGH pulse (~0.35µs) followed by a long LOW period (~0.8µs).\n• Bit 1: Long HIGH pulse (~0.7µs) followed by a short LOW period (~0.6µs).\n• Reset Condition: Holding the data bus LOW for more than 50 µs resets the pixel registers and shifts subsequent bits to the start of the chain.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 8. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Smart ambient room lighting systems.',
          'Robot status indicator indicators (status rings, diagnostic LEDs).',
          'IoT visual notification and telemetry feedback systems.',
          'PC gaming setups and interactive displays.',
          'Wearable electronics and light-up cosplay designs.',
          'Interactive art installations.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Common Problems'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Flickering LEDs: Caused by a weak power supply, missing smoothing capacitor, or data line cable runs that are too long.',
          'Random Colors/Static: Caused by a wrong color order (e.g. RGB vs GRB in software configuration) or EMI signal noise.',
          'First LED Failure: Triggered by excessive voltage spikes on the DIN pin because of a missing 330Ω resistor.',
          'Logic-level Mismatch: The ESP32 outputs 3.3V logic signals, while the WS2812B expects 5V logic inputs. For stable operation over long cables, senders must use a logic-level shifter (like the 74AHCT125).'
        ]
      },
      {
        type: '🔋 10. Power Architecture',
        level: 2,
        text: '🔋 10. Power Architecture'
      },
      {
        type: 'image',
        url: '/blog/18-ws2812b/ws2812b4.jpeg',
        caption: 'Figure 4: Common Ground power routing layout'
      },
      {
        type: 'paragraph',
        text: 'Correct Routing: The 5V external power supply directly feeds the WS2812B strip. The ESP32 control logic is only connected via the signal line. All GND references are tied together to complete the electrical circuit.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The WS2812B is a serially addressable RGB LED system where each pixel contains an integrated control IC that decodes high-speed digital pulse-width encoded data and propagates remaining data down the chain.'
      }
    ]
  },
  {
    id: 19,
    slug: 'pca9685-servo-driver-guide',
    title: 'PCA9685 - 16-Channel 12-Bit PWM Servo Driver (I2C Expansion Module)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the PCA9685 16-channel 12-bit PWM servo driver: internal architecture, I2C communication, power distribution layout, and robotics applications.',
    coverImage: '/blog/19-pca9685/pca9685.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'PCA9685 is a dedicated I2C-based PWM generation chip that produces 16 independent, high-resolution (12-bit) PWM signals for controlling servos, LEDs, and other PWM-controlled devices.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Problem It Solves'
      },
      {
        type: 'paragraph',
        text: 'Microcontrollers like ESP32 have a limited number of PWM channels. In robotics, you often need to control a high number of servos simultaneously (e.g. 6 DOF robotic arm -> 6 servos, hexapod -> 18 servos, humanoid -> 20+ servos).\n\nThe PCA9685 solves this by multiplexing 16 stable PWM outputs over a single I2C bus. Furthermore, multiple boards can be chained together.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Architecture'
      },
      {
        type: 'image',
        url: '/blog/19-pca9685/pca96851.jpeg',
        caption: 'Figure 1: Internal Oscillator, Counter, and PWM Generator blocks'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['25 MHz internal oscillator', 'Provides the master clock source for all PWM channels'],
          ['12-bit counter', 'Divides the PWM cycle into 4096 discrete steps (0–4095)'],
          ['16 independent PWM generators', 'Generates unique duty cycle pulses per channel'],
          ['I2C control logic', 'Communicates with the host MCU to set start and end registers']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'PWM Servo Position Concept:'
      },
      {
        type: 'table',
        headers: ['Position Angle', 'Pulse Width / Timing'],
        rows: [
          ['0°', '~1.0 ms pulse'],
          ['90°', '~1.5 ms pulse'],
          ['180°', '~2.0 ms pulse']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Description'],
        rows: [
          ['VCC', 'Power Input', 'Logic power supply (3.3V – 5V compatible)'],
          ['GND', 'Power Ground', 'Common ground reference pin'],
          ['SDA', 'Bi-directional Digital', 'I2C Serial Data line'],
          ['SCL', 'Input Clock', 'I2C Serial Clock line'],
          ['OE', 'Digital Input', 'Output Enable control pin (active LOW)'],
          ['V+', 'Power Input', 'High-current servo power supply (5V – 6V)'],
          ['OUT0 – OUT15', 'PWM Output', '16 individual PWM output channels']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 4. Power Architecture (Critical)'
      },
      {
        type: 'image',
        url: '/blog/19-pca9685/pca96852.jpeg',
        caption: 'Figure 2: Isolated Logic (VCC) and High Current Servo (V+) Rails'
      },
      {
        type: 'paragraph',
        text: 'Critical Design Rule: Logic Power (VCC) must be kept strictly separate from Servo Power (V+).\n• VCC: Connects to the ESP32 logic rail (3.3V/5V).\n• V+: Connects to an external high-current 5V–6V supply.\n\nWhy? Servos draw between 500 mA and 2A each under load (stall current). Powering them from the ESP32 will trigger resets, brownouts, and potentially damage the microcontroller.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 5. I2C Communication'
      },
      {
        type: 'image',
        url: '/blog/19-pca9685/pca96853.jpeg',
        caption: 'Figure 3: Address Jumper Pads (A0 to A5) Configuration'
      },
      {
        type: 'paragraph',
        text: 'Default Address: 0x40.\n\nAddressing Options: You can modify the I2C address using the A0–A5 solder pads. This allows chaining up to 62 modules on the same bus, providing up to 992 independent PWM outputs.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. Robotics Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Robotic arms (5–6 Degrees of Freedom)',
          'Humanoid walking robots',
          'Hexapod walking robots (requiring 18+ servos)',
          'Animatronics and facial actuators',
          'Servo-based pan/tilt camera gimbals'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 7. Control Flow'
      },
      {
        type: 'image',
        url: '/blog/19-pca9685/pca96854.jpeg',
        caption: 'Figure 4: ESP32 to PCA9685 to Servo Control Flow Pipeline'
      },
      {
        type: 'paragraph',
        text: 'System command path: ESP32 (I2C commands) -> PCA9685 Driver -> PWM signals (16 channels) -> Servos.'
      },
      {
        type: 'heading',
        level: 2,
        text: '📊 8. Key Specifications'
      },
      {
        type: 'table',
        headers: ['Feature', 'Specification Value'],
        rows: [
          ['Number of Channels', '16'],
          ['PWM Resolution', '12-bit (4096 discrete steps)'],
          ['Output Frequency', 'approx. 40 Hz to 1000 Hz (default servo frequency is 50 Hz)'],
          ['Communication Bus', 'I2C (Fast-mode plus up to 1 MHz)'],
          ['Device Address Range', '0x40 to 0x7F (hardware selectable)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Common Mistakes'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Powering Servos from ESP32: Triggers voltage drops, resets, and brownouts.',
          'Mixing VCC and V+ Rails: Causes logic board failure or servo instability.',
          'Wrong I2C Address: Results in no response from the board registers.',
          'No Common Ground: Prevents PWM signal references from functioning correctly, causing jitter.',
          'Underestimating Total Current: Choosing a weak external supply leads to servo jitter and system crashes.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Why Engineers Use It'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Offloads intensive PWM generation from the host microcontroller.',
          'Delivers stable hardware-timed pulses, eliminating servo jitter.',
          'Enables highly scalable multi-servo robotic platforms.',
          'Simplifies power and signal wiring layouts.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The PCA9685 is an I2C-controlled 16-channel PWM generator with 12-bit resolution that produces precise servo control signals independently of microcontroller timing constraints.'
      }
    ]
  },
  {
    id: 20,
    slug: 'servo-motor-guide',
    title: 'Servo Motors - Closed-Loop Position Control Actuators (Robotics Standard)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '9 min',
    featured: false,
    excerpt: 'An engineering guide to servo motors in robotics: closed-loop control loops, potentiometer feedback systems, PWM position mapping, power distribution, and mechanical gear matching.',
    coverImage: '/blog/20-servo/servo.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'A servo motor is a closed-loop electromechanical actuator that uses feedback (usually a potentiometer) to precisely control angular position using PWM signals.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. What Makes a Servo Different'
      },
      {
        type: 'paragraph',
        text: 'Key distinction between a standard DC motor and a servo motor:\n• DC Motor: Apply voltage -> continuous uncontrolled rotation.\n• Servo Motor: Send precise command signal -> moves output shaft to a specific angle -> holds position actively against external torque.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Structure'
      },
      {
        type: 'image',
        url: '/blog/20-servo/servo1.jpeg',
        caption: 'Figure 1: DC Motor, Gearbox reduction, feedback Potentiometer, and Control Board'
      },
      {
        type: 'table',
        headers: ['Component', 'Function'],
        rows: [
          ['DC Motor', 'Provides the electrical-to-mechanical energy conversion core'],
          ['Gearbox', 'Reduces rotational speed while increasing output torque'],
          ['Potentiometer', 'Measures the current angle of the output shaft'],
          ['Control Board', 'Compares the target command angle against the measured actual angle']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔄 3. Closed-Loop Control System'
      },
      {
        type: 'image',
        url: '/blog/20-servo/servo2.jpeg',
        caption: 'Figure 2: Closed-Loop Feedback Control System Block Diagram'
      },
      {
        type: 'paragraph',
        text: 'Feedback sequence:\nTarget Angle -> Error Calculation (Control Board) -> Motor Drive (H-bridge) -> Output Shaft Movement -> Angle Feedback (Potentiometer) -> Back to Error Calculation.\n\nThe error feedback loop operates continuously until the measured position matches the target position (error = 0).'
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 4. PWM Control Principle'
      },
      {
        type: 'image',
        url: '/blog/20-servo/servo4.jpeg',
        caption: 'Figure 3: Pulse Width Encoding for 0, 90, and 180 degrees'
      },
      {
        type: 'paragraph',
        text: 'Standard servo signals operate at a frequency of approximately 50 Hz (corresponding to a 20 ms signal period). The width of the high pulse in the duty cycle determines the target angle.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Typical Pulse-to-Angle Mapping:'
      },
      {
        type: 'table',
        headers: ['Pulse Width', 'Target Angle / Position'],
        rows: [
          ['1.0 ms', '0° (minimum position limit)'],
          ['1.5 ms', '90° (neutral center position)'],
          ['2.0 ms', '180° (maximum position limit)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 5. Servo Wiring'
      },
      {
        type: 'table',
        headers: ['Wire Color (Standard)', 'Function', 'Connection Target'],
        rows: [
          ['Red', 'VCC', 'Positive power supply (+5V to +6V)'],
          ['Brown or Black', 'GND', 'Common ground reference connection'],
          ['Orange or Yellow', 'Signal', 'PWM command signal line from MCU / driver']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 6. Power Requirements (Critical in Robotics)'
      },
      {
        type: 'table',
        headers: ['Servo Class', 'Typical Active / Stall Current'],
        rows: [
          ['SG90 Micro Servo', '100 mA (idle) to 300 mA (stall)'],
          ['Standard Hobby Servo (e.g. S3003)', '500 mA (active) to 1000 mA (stall)'],
          ['High Torque Digital Servo (e.g. MG996R)', '1.0 A (active) to 3.0 A+ (stall)']
        ]
      },
      {
        type: 'paragraph',
        text: '⚠️ CRITICAL DESIGN WARNING: Never power multiple servos directly from the ESP32 5V logic output pin. Doing so draws high currents that will trigger brownout resets, crash code execution, or permanently damage the microcontroller.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 7. Types of Servo Motors'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Micro Servo (e.g. SG90): Low-cost, plastic gears, lightweight; used in small educational setups.',
          'Metal Gear Servo: Fitted with brass or steel gears; highly durable, ideal for robotic arm joints.',
          'Continuous Rotation Servo: Potentiometer feedback is disconnected internally; the PWM signal controls rotational speed and direction instead of angular position.',
          'Digital Servo: Onboard microprocessor updates the motor drive at much higher frequencies; delivers faster response, higher holding torque, and improved precision.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 8. Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Robotic arm joints and linkages.',
          'Humanoid robot joints.',
          'Camera pan/tilt gimbals.',
          'Mechanical claws and grippers.',
          'RC vehicle steering linkages.',
          'Animatronic characters.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 9. Common Problems'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Servo Jitter: Triggered by an unstable power supply, weak current capability, or electrical noise on the PWM line.',
          'No Movement: Caused by a wrong signal pin configuration, a missing common ground connection, or an incorrect PWM frequency.',
          'Weak Torque: Caused by supplying insufficient voltage or current, or attempting to move an overloaded mechanism.',
          'Overheating: Triggered by a continuous mechanical stall condition or excessive static resistance.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 10. Servo vs DC Motor'
      },
      {
        type: 'image',
        url: '/blog/20-servo/servo5.jpeg',
        caption: 'Figure 4: Comparative analysis of control pipelines'
      },
      {
        type: 'table',
        headers: ['Feature', 'Servo Motor', 'DC Motor'],
        rows: [
          ['Primary Control Target', 'Precise angular position', 'Rotational speed and direction'],
          ['Position Feedback', 'Yes (internal potentiometer)', 'No (requires external encoders)'],
          ['Angular Precision', 'High', 'Low'],
          ['System Complexity', 'Medium (built-in driver)', 'Low (requires H-bridge driver)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'A servo motor is a closed-loop actuator system that integrates a DC motor, gearbox, position sensor, and control circuit to achieve precise angular positioning based on PWM command signals.'
      }
    ]
  },
  {
    id: 20,
    slug: 'mcp23017-gpio-expander-guide',
    title: 'MCP23017 - 16-Bit I2C GPIO Expander (Microchip Port Expander)',
    date: 'Jul 02, 2026',
    author: 'Hardware Lead',
    category: 'hardware',
    readTime: '8 min',
    featured: false,
    excerpt: 'An engineering overview of the MCP23017 16-bit I2C port expander: internal registers, port banks A and B, I2C address configurations, hardware interrupt pins (INTA/INTB), and latency limits.',
    coverImage: '/blog/21-mcp23017/mcp23017.jpeg',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'Core Idea'
      },
      {
        type: 'paragraph',
        text: 'MCP23017 is a hardware GPIO expansion chip that adds 16 additional digital input/output pins to a microcontroller using the I2C bus.'
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 1. Why MCP23017 Exists'
      },
      {
        type: 'paragraph',
        text: 'Microcontrollers like ESP32 already have general-purpose input/output pins, but complex robotics applications demand a massive number of digital signals (e.g. dense sensor arrays, multi-switch panels, LED matrices, relay modules).\n\nThe MCP23017 resolves this pin shortage by providing 16 extra GPIO pins controllable over a single I2C bus.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 2. Internal Architecture'
      },
      {
        type: 'image',
        url: '/blog/21-mcp23017/mcp230171.jpeg',
        caption: 'Figure 1: Internal Register Banks (Port A & Port B) Layout'
      },
      {
        type: 'paragraph',
        text: 'The 16 pins are divided into two 8-bit port banks:\n• GPIOA (Pins GPA0 to GPA7)\n• GPIOB (Pins GPB0 to GPB7)\n\nDirection, pull-up resistors, and state are controlled by internal registers written to over I2C.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Control Registers:'
      },
      {
        type: 'table',
        headers: ['Register Name', 'Function / Description'],
        rows: [
          ['IODIRA', 'Controls input/output direction for GPA pins (1 = Input, 0 = Output)'],
          ['GPIOA', 'Reads state of GPA input pins or writes output level'],
          ['GPPUA', 'Enables internal 100kΩ pull-up resistors for GPA pins'],
          ['IODIRB', 'Controls input/output direction for GPB pins'],
          ['GPIOB', 'Reads state of GPB input pins or writes output level'],
          ['GPPUB', 'Enables internal 100kΩ pull-up resistors for GPB pins']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔌 3. Pin Configuration'
      },
      {
        type: 'table',
        headers: ['Pin Name', 'Type', 'Description'],
        rows: [
          ['VDD', 'Power Input', 'Logic supply voltage (1.8V to 5.5V compatible)'],
          ['GND', 'Power Ground', 'Common ground reference pin'],
          ['SDA', 'Bi-directional Digital', 'I2C Serial Data line'],
          ['SCL', 'Input Clock', 'I2C Serial Clock line'],
          ['RESET', 'Digital Input', 'Hardware reset control pin (active LOW)'],
          ['A0, A1, A2', 'Digital Input', 'Hardware address configuration select pins'],
          ['GPA0 – GPA7', 'GPIO Bank A', '8 independent digital I/O pins of Bank A'],
          ['GPB0 – GPB7', 'GPIO Bank B', '8 independent digital I/O pins of Bank B']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '📡 4. I2C Communication'
      },
      {
        type: 'image',
        url: '/blog/21-mcp23017/mcp230172.jpeg',
        caption: 'Figure 2: Hardware Address Configuration via Pins A0, A1, A2'
      },
      {
        type: 'paragraph',
        text: 'Base I2C Address: 0x20.\n\nAddress Range: Pins A0, A1, and A2 determine the address offset, supporting addresses from 0x20 to 0x27. This enables attaching up to 8 MCP23017 expander chips to the same I2C bus, yielding 128 additional GPIO pins.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚡ 5. Electrical Characteristics'
      },
      {
        type: 'table',
        headers: ['Parameter', 'Specification Value'],
        rows: [
          ['Supply Voltage Range', '1.8V – 5.5V'],
          ['I2C Speed', 'Up to 1.7 MHz (high speed mode)'],
          ['Number of GPIOs', '16'],
          ['Max Continuous Current per Pin', 'approx. 25 mA (source or sink)']
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 6. How It Works in Practice'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Configure Directions: Write 0x00 to IODIRA to configure all GPA pins as outputs.',
          'Set Output States: Write 0xFF to GPIOA to set all GPA pins HIGH, or 0x00 to set them all LOW.',
          'Read Inputs: Read the GPIOA register to fetch the real-time digital states of the input pins.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '⚙️ 7. Interrupt Feature (Important)'
      },
      {
        type: 'image',
        url: '/blog/21-mcp23017/mcp230173.jpeg',
        caption: 'Figure 3: Hardware Interrupt (INTA/INTB) Alert Loop'
      },
      {
        type: 'paragraph',
        text: 'The MCP23017 features two hardware interrupt pins (INTA and INTB) mapped to Port A and Port B respectively. When a pin configured as an input changes state, the chip immediately asserts the corresponding interrupt pin.\n\nWhy it matters: This allows the host microcontroller to respond immediately to input changes without wasting CPU cycles continuously polling the I2C registers.'
      },
      {
        type: 'heading',
        level: 2,
        text: '⚠️ 8. Limitations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Not High-Speed GPIO: I2C bus transactions introduce latency, limiting speed compared to direct MCU GPIOs.',
          'No PWM Support: Cannot generate hardware-timed PWM signals directly (cannot run servo motors).',
          'Volatile Configuration: Internal configuration is lost on reset/power-off; direction registers must be written on startup.',
          'Bus Failure Dependency: A failure on the shared I2C bus (e.g. noise) halts all 16 pins simultaneously.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🔧 9. Typical Wiring (ESP32)'
      },
      {
        type: 'image',
        url: '/blog/21-mcp23017/mcp230174.jpeg',
        caption: 'Figure 4: MCP23017 to ESP32 standard I2C connection scheme'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'MCP23017 VDD -> ESP32 3.3V',
          'MCP23017 GND -> ESP32 GND',
          'MCP23017 SDA -> ESP32 GPIO 21 (with 4.7kΩ pull-up resistor)',
          'MCP23017 SCL -> ESP32 GPIO 22 (with 4.7kΩ pull-up resistor)',
          'MCP23017 RESET -> ESP32 3.3V (held active HIGH)',
          'MCP23017 A0, A1, A2 -> GND (selects address 0x20)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🤖 10. Common Applications'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Large LED status displays and arrays.',
          'Button matrices and operator keypads.',
          'Multi-channel relay drivers.',
          'Industrial control panels.',
          'Robotic control panel indicators.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '🧠 Engineering Summary'
      },
      {
        type: 'paragraph',
        text: 'The MCP23017 is an I2C-based 16-bit GPIO expander that provides additional digital input/output capability by exposing internal register-controlled port banks (A and B) accessible via standard I2C commands.'
      }
    ]
  }
];
