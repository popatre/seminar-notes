exports.getPicture = () => {
  return new Promise((res, rej) => {
    res("https: //i.kym-cdn.com/photos/images/newsfeed/001/399/011/06b.jpg");
  });
};
exports.getList = () => {
  return [
    { task: "Give mojo no cuddles", completed: true },
    { task: "Teach React Dev Tools", completed: false },
    { task: "World Domination", completed: false },
  ];
};
