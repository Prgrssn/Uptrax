exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          firebase_id: "hlsafhjkasufoa2398rhnska",
          name: "Bill Nye",
          user_avatar:
            "https://cdn.geekwire.com/wp-content/uploads/2019/08/A9_06020-630x420.jpg",
          exp: 5,
          ast: true,
          bio: "Hey Kids lets learn about science and stuff!",
        },
        {
          id: 2,
          firebase_id: "asdlkfhuas7826hjkdshaf8",
          name: "Robert Downey",
          user_avatar:
            "https://static.wikia.nocookie.net/snl/images/e/e3/Robert_Downey_Jr..jpg/revision/latest/scale-to-width-down/350?cb=20200725224545",
          exp: 0,
          ast: false,
          bio: "I am IronMan",
        },
        {
          id: 3,
          firebase_id: "jdsahkfgasyfgaky",
          name: "Ernie Hsiung",
          user_avatar:
            "https://pbs.twimg.com/media/EPAwEWsUwAAgsRM?format=jpg&name=900x900",
          exp: 6,
          ast: true,
          bio: "Let's code in the backcountry homie",
        },
      ]);
    });
};
