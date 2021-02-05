$(document).ready(function () {
  const submitReview = document.getElementById("submit_review");

  submitReview.addEventListener("click", (event) => {
    const n_stars = document.getElementById("stars_num").value;
    const rev_body = document.getElementById("review_body").value;

    console.log(n_stars);
    console.log("stopper");
    console.log(rev_body);

    function get_stars(stars) {
      let star_string = "";
      let one_star = '<img src="./assets/review_star.svg" class="rev_star" />';
      for (let i = 0; i < stars; i++) {
        star_string += one_star;
      }
      return star_string;
    }

    let rev_ele = $(`        
        <div class="review_item">
          <h2>
            stars: ${get_stars(n_stars)}
            
          </h2>
          <p>${rev_body}</p>
        </div>`);

    rev_ele.prependTo($(".past_review"));
  });
});
