/**
 * UUID
 * @typedef {string} uuid
 */

/**
 * @typedef {Object} ProgramOption
 * @property {uuid} id
 * @property {string} name
 * @property {string} team
 * @property {string | undefined} imagePath 画像ファイルのパス。もし画像が存在しない場合は`undefined`
 * @property {string[]} programType
 * @property {string[] | undefined} optionalTag 検索機能に使用するその他タグ。
 * @property {string} location
 * @property {number} floor
 * @property {string | undefined} prText もしPR文章が存在しない場合は`undefined`
 */

/** @class */
export class Program {
  /**
   *
   * @param {ProgramOption} option
   */
  constructor(option) {
    this.id = option.id;
    this.name = option.name;
    this.team = option.team;
    this.floor = option.floor;
    this.location = option.location;
    this.programType = option.programType;
    this.imagePath = option.imagePath;
    this.prText = option.prText;
    this.optionalTag = option.optionalTag;
  }

  /**
   * 企画に結びつくタグを返します。現時点では`programType`,`floor`,`location`,`optionalTag`がタグとなります
   * @returns {Tags}
   */
  get tags() {
    return new Tags([
      ...this.programType,
      this.floor.toString(),
      this.location,
      ...(this.optionalTag || []),
    ]);
  }
}

/** タグの集合を表わすクラス。`Set`を使用しているので、`Array`よりも高速。
 *  ただしタグの重複は認められません。
 *  @class
 * */
export class Tags extends Set {
  /**
   *
   * @param {string[]} init
   */
  constructor(init) {
    super(init);
  }
}

/**
 * 企画データのJSONをパースします
 * @param {Object} content
 * @return {Program[]}
 */
export function parseProgramsData(content) {
  return content.map((item) => {
    return new Program(item);
  });
}

/**
 * 指定したタグを含む企画を返します。デフォルトでは、タグのいずれかが含まれたもののみを返します
 * @param {Program[]} programs
 * @param {Tags} tags
 * @param {boolean} [is_complete=false] すべてのタグが完全に一致したもののみを返すか
 * @return {Program[]}
 */
export function matchPrograms(programs, tags, is_complete = false) {
  /** @type {Program[]} */
  let matchedPrograms = [];
  for (const program of programs) {
    const programTags = program.tags;
    if (is_complete) {
      if (tags.isSupersetOf(programTags)) {
        matchedPrograms.push(program);
        continue;
      }
    }
    if (!tags.isDisjointFrom(programTags)) {
      matchedPrograms.push(program);
    }
  }
  return matchedPrograms;
}
