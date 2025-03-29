import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Florian Astier - FlowTech</h1>
        <p className="text-xl mb-6">
          Architecte Systèmes | IA | Automatisation | Optimisation Tech
        </p>

        <div className="bg-zinc-900 p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-2">À propos</h2>
          <p>
            Je conçois, optimise et automatise des systèmes techniques pour les rendre plus intelligents,
            autonomes et durables. Avec une forte base en maintenance industrielle, infrastructure, IA et automatisation,
            je combine rigueur et créativité pour créer des solutions élégantes.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-2">Compétences clés</h2>
          <ul className="list-disc ml-6">
            <li>Infrastructure système (Proxmox, Docker, Btrfs, bcache)</li>
            <li>Développement IA (Freqtrade, Analyse IA, agents automatisés)</li>
            <li>Déploiement & Monitoring (Grafana, Prometheus, PBS)</li>
            <li>Optimisation FPV (Betaflight, Blackbox, tuning avancé)</li>
            <li>Maintenance & électronique industrielle</li>
            <li>Automatisation via scripts, N8N, Home Assistant, ESP32</li>
          </ul>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-semibold mb-2">Projets récents</h2>
          <ul className="list-disc ml-6">
            <li>🧠 Flow Tuning FPV : Analyse IA des logs Blackbox Betaflight</li>
            <li>⚙️ Infrastructure domotique avancée (serres, terrariums, etc.)</li>
            <li>📈 Stratégie IA de trading automatisée (Freqtrade - AdaptiveTATrend)</li>
            <li>🛠️ Serveurs de jeu optimisés (ARK, cluster Proxmox)</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/CV-FlowTech-Florian-Astier.pdf" download>
            <button className="w-full py-2 px-4 bg-zinc-800 text-white rounded border border-zinc-600 hover:bg-zinc-700 transition">
              📄 Télécharger le CV classique (PDF)
            </button>
          </a>
          <a href="mailto:Astier.Florian@gmail.com">
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              📬 Me contacter
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
