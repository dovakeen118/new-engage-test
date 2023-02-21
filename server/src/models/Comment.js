const Model = require("./Model");

class Comment extends Model {
  static get tableName() {
    return "comments";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["body"],

      properties: {
        body: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const { User } = require("./index");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "comments.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Comment;
