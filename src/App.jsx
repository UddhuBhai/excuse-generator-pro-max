import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import situations from "./data/situations.json";
import personas from "./data/personas.json";

import { generateExcuse } from "./utils/excuseGenerator";
import { calculateScores } from "./utils/scoreCalculator";

function App() {
  const [selectedSituation, setSelectedSituation] = useState("");
  const [selectedPersona, setSelectedPersona] = useState("");
  const [severity, setSeverity] = useState(5);

  const [excuse, setExcuse] = useState("");
  const [scores, setScores] = useState(null);

  const getSeverityLabel = () => {
    if (severity <= 2) return "🙂 MILD INCONVENIENCE";
    if (severity <= 4) return "😐 PRETTY BAD";
    if (severity <= 6) return "😬 THIS IS GETTING BAD";
    if (severity <= 8) return "💀 I'M COOKED";

    return "☢️ NUCLEAR";
  };

  const handleGenerate = () => {
    if (!selectedSituation || !selectedPersona) {
      alert(
        "Bro. Select what you fucked up AND who you're lying to."
      );
      return;
    }

    const generatedExcuse = generateExcuse(
      selectedSituation,
      severity
    );

    const generatedScores = calculateScores(severity);

    setExcuse(generatedExcuse);
    setScores(generatedScores);
  };

  return (
    <main className="app">

      {/* BACKGROUND */}

      <div className="background-glow" />

      {/* NAVBAR */}

      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo">
          EXCUSE GENERATOR{" "}
          <span>PRO MAX™</span>
        </div>

        <div className="nav-badge">
          100% UNNECESSARY
        </div>
      </motion.nav>

      {/* HERO */}

      <section className="hero">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">
            THE WORLD'S MOST ADVANCED
          </p>

          <h1>
            EXCUSE
            <br />
            GENERATOR
            <span>PRO MAX™</span>
          </h1>

          <p className="subtitle">
           Because accountability is overrated.
          </p>

          <p className="ai-disclaimer">
           AI-POWERED* ACCOUNTABILITY AVOIDANCE
           <span>*AI not included. We just lie really well.</span>
          </p>
        </motion.div>

        {/* GENERATOR */}

        <motion.div
          className="generator-box"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          {/* SITUATION */}

          <label className="question">
            WHAT DID YOU FUCK UP?
          </label>

          <select
            className="situation-button"
            value={selectedSituation}
            onChange={(event) =>
              setSelectedSituation(event.target.value)
            }
          >
            <option value="">
              Select your situation
            </option>

            {situations.map((situation, index) => (
              <option key={index} value={situation}>
                {situation}
              </option>
            ))}
          </select>

          {/* PERSONA */}

          <label className="question">
            WHO ARE YOU LYING TO?
          </label>

          <select
            className="situation-button"
            value={selectedPersona}
            onChange={(event) =>
              setSelectedPersona(event.target.value)
            }
          >
            <option value="">
              Select your victim
            </option>

            {personas.map((persona, index) => (
              <option key={index} value={persona}>
                {persona}
              </option>
            ))}
          </select>

          {/* SEVERITY */}

          <div className="severity-section">

            <div className="severity-header">

              <label className="question">
                HOW FUCKED ARE YOU?
              </label>

              <span className="severity-number">
                {severity}/10
              </span>

            </div>

            <input
              type="range"
              min="1"
              max="10"
              value={severity}
              onChange={(event) =>
                setSeverity(Number(event.target.value))
              }
              className="severity-slider"
            />

            <AnimatePresence mode="wait">
              <motion.p
                key={getSeverityLabel()}
                className="severity-label"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {getSeverityLabel()}
              </motion.p>
            </AnimatePresence>

          </div>

          {/* BUTTON */}

          <motion.button
            className="generate-button"
            onClick={handleGenerate}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            GENERATE EXCUSE
            <span>→</span>
          </motion.button>

          {/* RESULT */}

          <AnimatePresence>
            {excuse && scores && (
              <motion.div
                className="excuse-result"
                initial={{
                  opacity: 0,
                  y: 20,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                }}
                transition={{ duration: 0.4 }}
              >

                <p className="question">
                  YOUR EXCUSE
                </p>

                <p className="excuse-text">
                  "{excuse}"
                </p>

                <p className="excuse-target">
                  Intended victim: {selectedPersona}
                </p>

                <div className="score-section">

                  <div className="score-row">

                    <div className="score-header">
                      <span>BELIEVABILITY</span>
                      <span>
                        {scores.believability}%
                      </span>
                    </div>

                    <div className="score-bar">
                      <motion.div
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${scores.believability}%`,
                        }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>

                  </div>

                  <div className="score-row">

                    <div className="score-header">
                      <span>CREATIVITY</span>
                      <span>
                        {scores.creativity}%
                      </span>
                    </div>

                    <div className="score-bar">
                      <motion.div
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${scores.creativity}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1,
                        }}
                      />
                    </div>

                  </div>

                  <div className="score-row">

                    <div className="score-header">
                      <span>SHAMELESSNESS</span>
                      <span>
                        {scores.shamelessness}%
                      </span>
                    </div>

                    <div className="score-bar">
                      <motion.div
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${scores.shamelessness}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.2,
                        }}
                      />
                    </div>

                  </div>

                  <div className="score-row">

                    <div className="score-header">
                      <span>
                        CHANCE OF GETTING CAUGHT
                      </span>

                      <span>
                        {scores.chanceOfGettingCaught}%
                      </span>
                    </div>

                    <div className="score-bar">
                      <motion.div
                        className="score-fill"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${scores.chanceOfGettingCaught}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.3,
                        }}
                      />
                    </div>

                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </section>

      <footer>
        <p>
          Powered by questionable decisions™ | UddhuBhai 2026©
        </p>
      </footer>

    </main>
  );
}

export default App;