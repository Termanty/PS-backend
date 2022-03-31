const id_user_1 = "6a3734d0-4499-4dd7-aa06-94a1f8c6f21e";
const id_user_2 = "326d2bc0-6b4a-485c-aabb-37547a7494ca";
const id_user_3 = "434e2695-9773-4f6e-9353-d9645ea15e44";

const id_survey_1 = "6a3734d0-4499-4dd7-aa06-94a1f8c6f21e";
const id_survey_2 = "b1e5ff6a-6337-4616-b8e0-a9a6e388c6f6";
const id_survey_3 = "b0ba43d1-bbf2-477d-8053-a7f4eff7444a";

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("responses").del();
  await knex("responses").insert([
    {
      survey_id: id_survey_1,
      score: 9,
      comment: "Very exciting project",
    },
    {
      survey_id: id_survey_1,
      score: 7,
      comment: "",
    },
    {
      survey_id: id_survey_1,
      score: 1,
      comment: "I did not like this",
    },
    {
      survey_id: id_survey_2,
      score: 6,
      comment: "Soo bad",
    },
    {
      survey_id: id_survey_2,
      score: 2,
      comment: "",
    },
    {
      survey_id: id_survey_3,
      score: 10,
      comment: "Excelent happy team",
    },
  ]);
};
