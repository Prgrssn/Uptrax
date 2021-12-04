exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          firebase_id: "tTNAXg8Rxrgf8ec2E8bsijiP7XD2",
          name: "Bill Nye",
          user_avatar:
            "https://cdn.geekwire.com/wp-content/uploads/2019/08/A9_06020-630x420.jpg",
          exp: 5,
          ast: true,
          bio: "Hey Kids lets learn about science and stuff!",
          email: "billnye@science.com",
        },
        {
          id: 2,
          firebase_id: "Gv11F4AI1rcFCthxTtOK04ivtAn2",
          name: "Robert Downey",
          user_avatar:
            "https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/robertdowneyjr_cahalloffameinductee.png?1632975955",
          exp: 0,
          ast: false,
          bio: "I am IronMan",
          email: "robert@downeyjr.com",
        },
        {
          id: 3,
          firebase_id: "kB6oAQOLjLepb8x3tuXr5rqfEG73",
          name: "Ernie",
          user_avatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Ernie.Sesame-Street.webp",
          exp: 5,
          ast: true,
          bio: "Let's code in the backcountry homie",
          email: "ernie@ernie.com",
        },
      ]);
    });
};
