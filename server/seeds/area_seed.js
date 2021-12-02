exports.seed = function (knex) {
  return knex("areas")
    .del()
    .then(function () {
      return knex("areas").insert([
        {
          id: 1,
          name: "Whitewater",
          description:
            "Nowehere is the backcountry so easily accessible as from Whitewater. Don't understimate this terrain though, this is big stuff with big consequences should anything go wrong. Popular areas around Whitewater include: 5 Mile Basin, Acidophelus, Ymir Bowl, First Choice, Dog Leg, Trash Chutes, Black Queen and Evening Ridge.",
          map_url: "https://fatmap.com/routeid/37668/ymir-peak-bench?fmid=em",
        },
        {
          id: 2,
          name: "Kootenay Pass",
          description:
            "Kootenay Pass is onf of Canada's highest year-round roads which providdes easy access to some of the best ski touring options in British Columbia. With several different options ranging from half-day tours to multi-day excursions when staying in Ripple Ridge or Lightning Strike cabins, there's plenty to explore. Areas include: Blady Rocks, The Crags and Cornice Ridge.",
          map_url:
            "https://fatmap.com/routeid/130443/lightning-strike-and-ripple-ridge?fmid=em",
        },
        {
          id: 3,
          name: "Kokanee Glacier Park",
          description:
            "Kokanee Glacier Provincial Park is renowned as one of the best destination for powder skiing in Western Canada. There is lots of snow, a great variety of runs to choose from and tree skiing. The diversity of the terrain in the area is what appeals to most who travel to ski here. This area is deep-house, so you'll either need a sled, a friend with a sled or be one of the lucky few who can get to the Kokanee Glacier Cabin via helicopter. This area is for intermediate to expert skiers and has some unforgiving albeit epic terrain.",
          map_url: "https://fatmap.com/routeid/955754/the-key-hole?fmid=em",
        },
      ]);
    });
};
