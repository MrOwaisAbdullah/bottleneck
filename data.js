const components = {
  cpus: [
    // AMD Ryzen (Zen 3 → Zen 5)
    { id: "ryzen-5-5600", name: "AMD Ryzen 5 5600", score: 21542, rank: 12, coreCount: 6, threadCount: 12, baseClock: "3.5 GHz", boostClock: "4.4 GHz", tdp: "65W", ddr4_support: true, ddr5_support: false, pcie_version: "4.0", freshness: "2025-Q3", release_date: "2021-04-20", status: "available" },
    { id: "ryzen-7-5700x", name: "AMD Ryzen 7 5700X", score: 26200, rank: 11, coreCount: 8, threadCount: 16, baseClock: "3.4 GHz", boostClock: "4.6 GHz", tdp: "65W", ddr4_support: true, ddr5_support: false, pcie_version: "4.0", freshness: "2025-Q3", release_date: "2022-04-04", status: "available" },
    { id: "ryzen-7-7800x3d", name: "AMD Ryzen 7 7800X3D", score: 34700, rank: 8, coreCount: 8, threadCount: 16, baseClock: "4.2 GHz", boostClock: "5.0 GHz", tdp: "120W", ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2023-04-06", status: "available" },
    { id: "ryzen-7-9800x3d", name: "AMD Ryzen 7 9800X3D", score: 37000, rank: 7, coreCount: 8, threadCount: 16, baseClock: "4.7 GHz", boostClock: "5.2 GHz", tdp: "120W", ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2024-11-07", status: "available" },
    { id: "ryzen-9-7950x3d", name: "AMD Ryzen 9 7950X3D", score: 62380, rank: 3, coreCount: 16, threadCount: 32, baseClock: "4.2 GHz", boostClock: "5.7 GHz", tdp: "120W", ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2023-02-28", status: "available" },
    { id: "ryzen-9-9950x3d", name: "AMD Ryzen 9 9950X3D", score: 70250, rank: 1, coreCount: 16, threadCount: 32, baseClock: "4.3 GHz", boostClock: "5.7 GHz", tdp: "170W", ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q1", release_date: "2025-03-12", status: "upcoming" },

    // Intel 12th → 14th & Arrow Lake
    { id: "i5-12600k", name: "Intel Core i5-12600K", score: 27599, rank: 10, coreCount: 10, pCoreCount: 6, eCoreCount: 4, threadCount: 16, baseClock: "3.7 GHz", boostClock: "4.9 GHz", tdp: "125W (150W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2021-11-04", status: "available" },
    { id: "i5-13600k", name: "Intel Core i5-13600K", score: 38600, rank: 6, coreCount: 14, pCoreCount: 6, eCoreCount: 8, threadCount: 20, baseClock: "3.5 GHz", boostClock: "5.1 GHz", tdp: "125W (181W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2022-10-20", status: "available" },
    { id: "i5-14600k", name: "Intel Core i5-14600K", score: 39600, rank: 5, coreCount: 14, pCoreCount: 6, eCoreCount: 8, threadCount: 20, baseClock: "3.5 GHz", boostClock: "5.3 GHz", tdp: "125W (181W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2023-10-17", status: "available" },
    { id: "i7-12700k", name: "Intel Core i7-12700K", score: 34380, rank: 9, coreCount: 12, pCoreCount: 8, eCoreCount: 4, threadCount: 20, baseClock: "3.6 GHz", boostClock: "5.0 GHz", tdp: "125W (190W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2021-11-04", status: "available" },
    { id: "i9-13900k", name: "Intel Core i9-13900K", score: 58521, rank: 4, coreCount: 24, pCoreCount: 8, eCoreCount: 16, threadCount: 32, baseClock: "3.0 GHz", boostClock: "5.8 GHz", tdp: "125W (253W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2022-10-20", status: "available" },
    { id: "i9-14900k", name: "Intel Core i9-14900K", score: 59500, rank: 2, coreCount: 24, pCoreCount: 8, eCoreCount: 16, threadCount: 32, baseClock: "3.2 GHz", boostClock: "6.0 GHz", tdp: "125W (253W MTP)", ddr4_support: true, ddr5_support: true, pcie_version: "5.0", freshness: "2025-Q3", release_date: "2023-10-17", status: "available" },
    { id: "core-ultra-9-285k", name: "Intel Core Ultra 9 285K", score: 67731, rank: 2, coreCount: 24, pCoreCount: 8, eCoreCount: 16, threadCount: 24, baseClock: "3.7 GHz", boostClock: "5.7 GHz", tdp: "125W (250W MTP)", ddr4_support: false, ddr5_support: true, pcie_version: "5.0", freshness: "2024-Q4", release_date: "2024-10-24", status: "available" }
  ],

  gpus: [
    // NVIDIA RTX 30 → 50 series
    { id: "gtx-1660-super", name: "NVIDIA GTX 1660 Super", score: 8805, fps1080: 95, fps1440: 68, fps4k: 38, rank: 12, vram: "6GB GDDR6", busInterface: "PCIe 3.0 x16", tdp: "125W", ray_tracing_multiplier: 0.0, dlss_impact: 1.0, freshness: "2025-Q3", release_date: "2019-10-29", status: "available" },
    { id: "rtx-3060", name: "NVIDIA RTX 3060", score: 17100, fps1080: 140, fps1440: 110, fps4k: 60, rank: 10, vram: "12GB GDDR6", busInterface: "PCIe 4.0 x16", tdp: "170W", ray_tracing_multiplier: 0.7, dlss_impact: 1.4, freshness: "2025-Q3", release_date: "2021-02-25", status: "available" },
    { id: "rtx-4060", name: "NVIDIA RTX 4060", score: 19800, fps1080: 150, fps1440: 120, fps4k: 65, rank: 9, vram: "8GB GDDR6", busInterface: "PCIe 4.0 x8", tdp: "115W", ray_tracing_multiplier: 0.8, dlss_impact: 1.4, freshness: "2025-Q3", release_date: "2023-06-29", status: "available" },
    { id: "rtx-4070", name: "NVIDIA RTX 4070", score: 21300, fps1080: 180, fps1440: 150, fps4k: 85, rank: 8, vram: "12GB GDDR6X", busInterface: "PCIe 4.0 x16", tdp: "200W", ray_tracing_multiplier: 1.0, dlss_impact: 1.3, freshness: "2025-Q3", release_date: "2023-04-13", status: "available" },
    { id: "rtx-4080", name: "NVIDIA RTX 4080", score: 34000, fps1080: 220, fps1440: 190, fps4k: 120, rank: 4, vram: "16GB GDDR6X", busInterface: "PCIe 4.0 x16", tdp: "320W", ray_tracing_multiplier: 1.2, dlss_impact: 1.5, freshness: "2025-Q3", release_date: "2022-11-16", status: "available" },
    { id: "rtx-4090", name: "NVIDIA RTX 4090", score: 39000, fps1080: 350, fps1440: 300, fps4k: 200, rank: 3, vram: "24GB GDDR6X", busInterface: "PCIe 4.0 x16", tdp: "450W", ray_tracing_multiplier: 1.5, dlss_impact: 1.7, freshness: "2025-Q3", release_date: "2022-10-12", status: "available" },
    { id: "rtx-5070-ti", name: "NVIDIA RTX 5070 Ti", score: 25000, fps1080: 200, fps1440: 170, fps4k: 100, rank: 6, vram: "12GB GDDR7", busInterface: "PCIe 4.0 x16", tdp: "250W", ray_tracing_multiplier: 1.1, dlss_impact: 1.5, freshness: "2025-Q3", release_date: "2025-01-29", status: "upcoming" },
    { id: "rtx-5090", name: "NVIDIA RTX 5090", score: 45000, fps1080: 420, fps1440: 350, fps4k: 240, rank: 1, vram: "32GB GDDR7", busInterface: "PCIe 5.0 x16", tdp: "600W", ray_tracing_multiplier: 1.8, dlss_impact: 1.8, freshness: "2025-Q3", release_date: "2025-01-29", status: "upcoming" },

    // AMD RX 7000 → 9000
    { id: "rx-7600", name: "AMD RX 7600", score: 10838, fps1080: 130, fps1440: 100, fps4k: 55, rank: 11, vram: "8GB GDDR6", busInterface: "PCIe 4.0 x8", tdp: "165W", ray_tracing_multiplier: 0.6, dlss_impact: 1.0, freshness: "2025-Q3", release_date: "2023-05-25", status: "available" },
    { id: "rx-7900xt", name: "AMD RX 7900 XT", score: 31000, fps1080: 280, fps1440: 240, fps4k: 160, rank: 5, vram: "20GB GDDR6", busInterface: "PCIe 4.0 x16", tdp: "315W", ray_tracing_multiplier: 0.9, dlss_impact: 1.0, freshness: "2025-Q3", release_date: "2022-12-13", status: "available" },
    { id: "rx-9060-xt", name: "AMD RX 9060 XT", score: 18000, fps1080: 150, fps1440: 120, fps4k: 70, rank: 7, vram: "16GB GDDR6", busInterface: "PCIe 4.0 x8", tdp: "160W", ray_tracing_multiplier: 0.8, dlss_impact: 1.0, freshness: "2025-Q2", release_date: "2025-06-05", status: "upcoming" },

    // Intel Arc
    { id: "arc-b580", name: "Intel Arc B580", score: 14934, fps1080: 150, fps1440: 120, fps4k: 65, rank: 2, vram: "12GB GDDR6", busInterface: "PCIe 4.0 x16", tdp: "190W", ray_tracing_multiplier: 0.7, dlss_impact: 1.0, freshness: "2024-Q4", release_date: "2024-12-13", status: "available" }
  ],

  games: [
    { id: "cyberpunk-2077", name: "Cyberpunk 2077", cpu_intensity: 0.8, gpu_intensity: 0.95, ray_tracing_support: true, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 4070", esports_suitable: false, aaa_title: true },
    { id: "cs2", name: "Counter-Strike 2", cpu_intensity: 0.9, gpu_intensity: 0.6, ray_tracing_support: false, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 3060", esports_suitable: true, aaa_title: false },
    { id: "valorant", name: "Valorant", cpu_intensity: 0.85, gpu_intensity: 0.5, ray_tracing_support: false, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 3060", esports_suitable: true, aaa_title: false },
    { id: "alan-wake-2", name: "Alan Wake 2", cpu_intensity: 0.75, gpu_intensity: 0.98, ray_tracing_support: true, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 4070", esports_suitable: false, aaa_title: true },
    { id: "fortnite", name: "Fortnite", cpu_intensity: 0.7, gpu_intensity: 0.75, ray_tracing_support: true, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 3060", esports_suitable: true, aaa_title: false },
    { id: "starfield", name: "Starfield", cpu_intensity: 0.85, gpu_intensity: 0.9, ray_tracing_support: false, recommended_cpu: "ryzen-7-7800x3d", recommended_gpu: "RTX 4070", esports_suitable: false, aaa_title: true },
    { id: "black-myth-wukong", name: "Black Myth: Wukong", cpu_intensity: 0.8, gpu_intensity: 0.95, ray_tracing_support: true, recommended_cpu: "ryzen-7-7800x3d", recommended_gpu: "RTX 4070", esports_suitable: false, aaa_title: true },
    { id: "cod-black-ops-6", name: "Call of Duty: Black Ops 6", cpu_intensity: 0.85, gpu_intensity: 0.8, ray_tracing_support: true, recommended_cpu: "i5-12600K", recommended_gpu: "RTX 3060", esports_suitable: true, aaa_title: true }
  ]
};

// Export for browser usage
window.components = components;