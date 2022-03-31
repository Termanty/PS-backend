// const crypto = require("crypto");
// const id = crypto.randomUUID();

const id_user_1 = "531b286f-1307-4c3b-8f7b-95ca95445428";
const id_user_2 = "326d2bc0-6b4a-485c-aabb-37547a7494ca";
const id_user_3 = "434e2695-9773-4f6e-9353-d9645ea15e44";

const id_1 = "6a3734d0-4499-4dd7-aa06-94a1f8c6f21e";
const id_2 = "b1e5ff6a-6337-4616-b8e0-a9a6e388c6f6";
const id_3 = "b0ba43d1-bbf2-477d-8053-a7f4eff7444a";

exports.seed = async function (knex) {
  await knex("surveys").del();
  await knex("surveys").insert([
    {
      id: id_1,
      user_id: id_user_1,
      name: "Tero's questionnaire",
      question_text: "How likely are you to recommend us to a friend",
    },
    {
      id: id_2,
      user_id: id_user_2,
      name: "NPS survey",
      question_text:
        "How likely are you to recommend our service to your friend",
    },
    {
      id: id_3,
      user_id: id_user_3,
      name: "Customer recommendation survey",
      question_text: "How likely are you to recommend us to a friend",
    },
  ]);
};
