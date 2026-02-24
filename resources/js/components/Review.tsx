import { Review as ReviewType } from "../types/global";
import avatar from "@src/assets/images/png/user.png";
const format = (date: string) => {
    return new Date(date).toLocaleDateString();
};
const Review = ({ review }: { review: ReviewType }) => {
    return (
        <div className="d-flex justify-content-between flex-column gap-2">
            <div className="d-flex justify-content-between gap-2">
                <img
                    src={avatar}
                    width={50}
                    height={50}
                    className="rounded-circle"
                    alt="user avatar"
                />
                <div className="rate d-flex flex-column">
                    <p className="text-warning">{"★".repeat(review.rating)}</p>
                    <div className="text-secondary">
                        {format(review.updated_at)}
                    </div>
                </div>
            </div>
            <p>{review.comment}</p>
        </div>
    );
};
export default Review;
