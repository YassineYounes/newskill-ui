import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number | undefined = 0;
  @Input() content: any;

  getStars() {
    if (!this.rating) {
      return {
        fullStars: new Array(0),
        halfStar: 0,
        emptyStars: new Array(0)
      };
    }
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return {
      fullStars: new Array(fullStars),
      halfStar: halfStar,
      emptyStars: new Array(emptyStars)
    };
  }
}
