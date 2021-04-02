new Vue({
  el: "#game",
  data: {
    greenBar: {
      backgroundColor: "green",
      margin: 0,
      color: "white",
    },
    monsterBar: {
      width: 100,
    },
    playerBar: {
      width: 100,
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

    initialArray: [
      // {
      //   number: 0,
      //   playerAction: "",
      //   playerDmgTaken: 0,
      //   playerHeal: 0,
      //   monsterDmgTaken: 0,
      // },
    ],
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
    startGame: function () {
      this.game.started = true
      this.game.specialAttack = 1
      this.game.hpPlayer = 100
      this.game.hpMonster = 100
      this.monsterBar.width = this.game.hpMonster * 3.01 + "px"
      this.playerBar.width = this.game.hpPlayer * 3.01 + "px"
      this.game.rounds = []
    },
    finishGame: function () {
      this.game.started = false
      this.game.specialAttack = 1
      this.game.hpPlayer = 100
      this.game.hpMonster = 100
      this.monsterBar.width = this.game.hpMonster * 3.01 + "px"
      this.playerBar.width = this.game.hpPlayer * 3.01 + "px"
      this.game.rounds = []
    },
    registerRound: function (roundObj) {
      this.game.rounds.push(roundObj)
      this.monsterBar.width = this.game.hpMonster * 3.3 + "px"
      this.playerBar.width = this.game.hpPlayer * 3.3 + "px"
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
