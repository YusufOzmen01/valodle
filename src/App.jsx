import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

let images = [
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png',
    name: 'Brimstone',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png',
    name: 'Phoenix',
    origin: "70% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png',
    name: 'Sage',
    origin: "65% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png',
    name: 'Sova',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png',
    name: 'Viper',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png',
    name: 'Cypher',
    origin: "60% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png',
    name: 'Reyna',
    origin: "65% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png',
    name: 'Killjoy',
    origin: "85% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png',
    name: 'Breach',
    origin: "70% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png',
    name: 'Omen',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png',
    name: 'Jett',
    origin: "80% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png',
    name: 'Raze',
    origin: "80% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png',
    name: 'Skye',
    origin: "80% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png',
    name: 'Yoru',
    origin: "65% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png',
    name: 'Astra',
    origin: "30% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png',
    name: 'Kayo',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png',
    name: 'Chamber',
    origin: "60% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png',
    name: 'Neon',
    origin: "5% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png',
    name: 'Fade',
    origin: "50% 99%"
  },
  {
    url: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png',
    name: 'Harbor',
    origin: "80% 99%"
  }
]

export default function App() {
  const games = ["Feetdle", "Boobdle", "Bootydle", "Soundle"]

  const [gamesState, setGamesState] = useState(false)
  const [currentGame, setCurrentGame] = useState(games[0])
  const [currentAgent, setCurrentAgent] = useState(images[images.length * Math.random() | 0])
  const [wrong, setWrong] = useState(false)

  const gamesTransition = {
    open: {
      opacity: 1,
      scale: 1
    },
    closed: {
      opacity: 0,
      scale: 0
    }
  }

  return (
    <div className="app bg-gray-800 h-screen place-content-center grid">
      <br />
      <br />
      <form className="grid place-items-center grid-cols-2 z-0 relative shadow-lg">
      <img className="h-96 m-4" src={currentAgent.url} alt="" />
        <div className="grid place-items-center mg-4 w-45">
          <h1 className="text-4xl text-slate-300">{currentGame}</h1>
          <span className="text-sm mt-2 text-slate-500 mb-24">Made by Ozefear and SergioMarquina</span>
          <button onClick={(e) => {
            e.preventDefault()

            setGamesState(!gamesState)
          }} className="text-lg w-44 h-8 bg-gray-700 outline outline-1 outline-slate-500 rounded-lg text-slate-300">
            Games  {gamesState ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>}
          </button>
          <motion.div animate={gamesState ? gamesTransition.open : gamesTransition.closed} transition={{ ease: "easeInOut", duration: 0.3 }} className="mt-52 outline outline-1 outline-slate-500 grid grid-cols-1 bg-gray-800 rounded-lg shadow w-44 dark:bg-gray-700 z-10 absolute">
            {games.map(g => <button onClick={e => {
              e.preventDefault()

              setCurrentGame(g)
              setGamesState(false)
            }} className="w-44 h-8 text-slate-300 hover:text-slate-200 hover:bg-gray-500 transition-all duration-200">{g}</button>)}
          </motion.div>
          <input id="guess" min={1} className={"w-44 h-8 mt-4 bg-gray-700 outline outline-1 rounded-lg p-2 text-slate-300 text-center " + (wrong ? "outline-red-500" : "outline-slate-500")} type="text" />
          <button onClick={(e) => {
            e.preventDefault()

            const value = document.getElementById("guess").value
            if (value.toLowerCase() == currentAgent.name.toLowerCase()) {
              setWrong(false)

              images = images.filter(e => e.name != currentAgent.name)
              
              if (images.length == 0) {
                alert("You win!")
                window.location.reload()
              }

              setCurrentAgent(images[images.length * Math.random() | 0])
              document.getElementById("guess").value = ""
            } else {
              setWrong(true)
            }
          }} className="mt-4 text-xl w-36 h-16 bg-gray-700 outline outline-1 outline-slate-500 rounded-lg text-center text-slate-300 hover:text-slate-200 hover:bg-gray-500 transition duration-200">Guess</button>
        </div>
      </form>
    </div>
  )
}
