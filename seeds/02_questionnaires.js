// const crypto = require("crypto");
// const id = crypto.randomUUID();

const id_user_1 = "531b286f-1307-4c3b-8f7b-95ca95445428";
const id_user_2 = "326d2bc0-6b4a-485c-aabb-37547a7494ca";
const id_user_3 = "434e2695-9773-4f6e-9353-d9645ea15e44";
exports.seed = async function (knex) {
  await knex("questionnaires").del();
  await knex("questionnaires").insert([
    {
      user_id: id_user_1,
      name: "Tero's questionnaire",
      question_text: "How likely are you to recommend us to a friend",
    },
    {
      user_id: id_user_2,
      name: "NPS survey",
      question_text:
        "How likely are you to recommend our service to your friend",
    },
    {
      user_id: id_user_3,
      name: "Customer recommendation survey",
      question_text: "How likely are you to recommend us to a friend",
    },
  ]);
};
