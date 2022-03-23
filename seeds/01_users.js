// const crypto = require("crypto");
// const id = crypto.randomUUID();
const id1 = "531b286f-1307-4c3b-8f7b-95ca95445428";
const id2 = "326d2bc0-6b4a-485c-aabb-37547a7494ca";
const id3 = "434e2695-9773-4f6e-9353-d9645ea15e44";

exports.seed = async (knex) => {
  await knex("users").del();

  await knex("users").insert([
    {
      id: id1,
      name: "tero",
      email: "tero@goomail.com",
      password: "secret1",
    },
    {
      id: id2,
      name: "make",
      email: "make@hoomail.com",
      password: "secret2",
    },
    {
      id: id3,
      name: "suvi",
      email: "suvi@goomail.com",
      password: "secret3",
    },
  ]);
};
