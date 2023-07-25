
module.exports = {
    events
}

function events(req, res) {
    res.render("events", {
      title: "Events"
    });
  }