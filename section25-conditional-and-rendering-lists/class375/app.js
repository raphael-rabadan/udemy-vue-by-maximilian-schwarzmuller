new Vue({
  el: "#game",
  data: {
    greenBar: {
      backgroundColor: "green",
      margin: 0,
      color: "white",
    },
    cssLine: {
      padding: "2px",
      marginBottom: "1px",
      textAlign: "center",
      fontWeight: "bold",
    },
    cssRed: {
      backgroundColor: "lightcoral",
      color: "red",
    },
    cssBlue: {
      backgroundColor: "lightblue",
      color: "blue",
    },

    game: {
      started: false,
      specialAttack: 1,
      hpPlayer: 100,
      hpMonster: 100,
      rounds: [],
    },
  },
  computed: {
    gameEnded: function () {
      return this.game.hpMonster <= 0 || this.game.hpPlayer <= 0
    },
    hasSpecialAttack: function () {
      return this.game.specialAttack > 0
    },
  },
  methods: {
    resetGame: function () {
      this.game.specialAttack = 1
      this.game.hpPlayer = 100
      this.game.hpMonster = 100
      this.game.rounds = []
    },
    startGame: function () {
      this.game.started = true
      this.resetGame()
    },
    finishGame: function () {
      this.game.started = false
      this.resetGame()
    },
    registerRound: function (roundObj) {
      this.game.rounds.push(roundObj)
    },
    attack: function (type) {
      const playerAttack = attackFormula()
      const monsterAttack = attackFormula()
      this.game.hpPlayer -= monsterAttack
      this.game.hpMonster -= playerAttack

      const obj = {
        number: this.game.rounds.length,
        playerAction: "Attack",
        playerDmgTaken: monsterAttack,
        monsterDmgTaken: playerAttack,
      }

      this.registerRound(obj)
    },
    heal: function (type) {
      const heal = healFormula()
      const monsterAttack = attackFormula()
      this.game.hpPlayer -= monsterAttack

      if (this.game.hpPlayer + heal > 100) {
        this.game.hpPlayer = 100
      } else {
        this.game.hpPlayer += heal
      }

      const obj = {
        number: this.game.rounds.length,
        playerAction: "Heal",
        playerDmgTaken: monsterAttack,
        playerHeal: heal,
      }

      this.registerRound(obj)
    },
    specialAttack: function () {
      const playerAttack = specialAttackFormula()
      const monsterAttack = attackFormula()
      this.game.hpPlayer -= monsterAttack
      this.game.hpMonster -= playerAttack

      const obj = {
        number: this.game.rounds.length,
        playerAction: "Special Attack",
        playerDmgTaken: monsterAttack,
        monsterDmgTaken: playerAttack,
      }

      this.registerRound(obj)
    },
    specialAttack: function () {
      const playerAttack = specialAttackFormula()
      const monsterAttack = attackFormula()
      this.game.hpPlayer -= monsterAttack
      this.game.hpMonster -= playerAttack
      this.game.specialAttack -= 1

      const obj = {
        number: this.game.rounds.length,
        playerAction: "Special Attack",
        playerDmgTaken: monsterAttack,
        monsterDmgTaken: playerAttack,
      }

      this.registerRound(obj)
    },
  },
})

function healFormula() {
  return calculate(3)
}

function attackFormula() {
  return calculate(2)
}

function specialAttackFormula() {
  return calculate(3)
}

function calculate(base = 1) {
  return (parseInt(Math.random() * 10) + 1) * base
}
