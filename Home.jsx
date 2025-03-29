import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Florian Astier - FlowTech</h1>
        <p className="text-xl mb-6">
          Architecte Systèmes | IA | Automatisation | Optimisation Tech
        </p>

        <Card className="bg-zinc-900 mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">À propos</h2>
            <p>
              Je conçois, optimise et automatise des systèmes techniques pour les
              rendre plus intelligents, autonomes et durables. Avec une forte base
              en maintenance industrielle, infrastructure, IA et automatisation,
              je combine rigueur et créativité pour créer des solutions élégantes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Compétences clés</h2>
            <ul className="list-disc ml-6">
              <li>Infrastructure système (Proxmox, Docker, Btrfs, bcache)</li>
              <li>Développement IA (Freqtrade, Analyse IA, agents automatisés)</li>
              <li>Déploiement & Monitoring (Grafana, Prometheus, PBS)</li>
              <li>Optimisation FPV (Betaflight, Blackbox, tuning avancé)</li>
              <li>Maintenance & électronique industrielle</li>
              <li>Automatisation via scripts, N8N, Home Assistant, ESP32</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 mb-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Projets récents</h2>
            <ul className="list-disc ml-6">
              <li>🧠 Flow Tuning FPV : Analyse IA des logs Blackbox Betaflight</li>
              <li>⚙️ Infrastructure domotique avancée (serres, terrariums, etc.)</li>
              <li>📈 Stratégie IA de trading automatisée (Freqtrade - AdaptiveTATrend)</li>
              <li>🛠️ Serveurs de jeu optimisés (ARK, cluster Proxmox)</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/CV-FlowTech-Florian-Astier.pdf" download>
            <Button variant="outline" className="w-full">
              📄 Télécharger le CV classique (PDF)
            </Button>
          </a>
          <a href="mailto:Astier.Florian@gmail.com">
            <Button className="w-full">📬 Me contacter</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
