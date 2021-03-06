import func from '../utils/functions.js';

const {
  randomNumber
} = func;

export default class Sector {
  // /**
  //  * Стэйт включает в себя 
  //  * тип клетки, соотвецтвенный цвет клетки 
  //  * ресурсы клетки и их количество (много, средне, мало)
  //  * принадлежность клетки (раса, необитаемая или пираты)
  //  */
  constructor(cube, id) {
    this.cube = cube;
    this.neighbors = [];
    this.id = id;
    this.position = 1;
    this.focus = false;
    this.inmates = {};
    this.state = {
      type: '',
      resources: [],
      planets: [],
      borderColor: '',
      backColor: ''
    };
  }

  /**
   * Возвращает науку населяющих планету npc или 1
   */
  getScience() {
    if (Object.keys(this.inmates).length != 0) {
      return this.inmates.state.science || 1;
    }
    return 1;
  }

  isEnemy() {
    if (Object.keys(this.inmates).length == 0) {
      return false;
    }

    const npc = this.inmates;
    if (npc.relationship.player < 0) {
      return true;
    }
  }
}


