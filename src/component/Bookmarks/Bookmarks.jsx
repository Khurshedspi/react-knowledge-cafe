import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-2">
            <h3 className="text-4xl text-center">Reading time: {readingTime}</h3>
            <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
        {
            bookmarks.map((bookmark, idx) => <Bookmark 
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
        }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;