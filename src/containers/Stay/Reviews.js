import React from 'react';
import { Glyphicon } from 'react-bootstrap';
const Reviews = () => (
    <div>
      <div className="box-reviews">
        <h4>210 Reviews</h4>
        <div className="stars">
          {[
            <Glyphicon glyph="star"/>,
            <Glyphicon glyph="star"/>,
            <Glyphicon glyph="star"/>,
            <Glyphicon glyph="star"/>,
            <Glyphicon glyph="star-empty"/>
          ]}
        </div>
        <div className="spacer"/>
        <input type="text" placeholder="Search reviews"/>
      </div>
      <table>
        <tr>
          <td>Accuracy</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
          <td>Location</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
          <td>Check In</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
        </tr>
        <tr>
          <td>Cleanliness</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
          <td>Value</td>
          <td>
            <div className="stars">
              {[
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star"/>,
                <Glyphicon glyph="star-empty"/>
              ]}
            </div>
          </td>
        </tr>
      </table>
      <div className="reviews">
        <div className="review">
          <div className="review-head">
            <img className="img-display" src="https://a0.muscache.com/im/users/26522933/profile_pic/1433314721/original.jpg?aki_policy=profile_x_medium"/>
            <div>
              <strong>Jenny</strong>
              <div className="text-muted">April 2017</div>
            </div>
          </div>
          <p>
            A great apartment, exactly as described. The views over Hvar are wonderful. We loved having our breakfast in the garden. The apartment was very cleanand tidy and had everything we needed. Would definitely stay here again!
          </p>
          <div className="review-buttons">
            <div className="spacer"/>
            <button className="btn btn-danger">
              <i className="fa fa-flag"></i><span>Report</span>
            </button>
            <button className="btn btn-danger">
              <i className="fa fa-thumbs-up"></i><span className="border-right">Helpful</span><span>4</span>
            </button>
          </div>
        </div>
        <div className="review">
          <div className="review-head">
            <img className="img-display" src="https://a0.muscache.com/im/pictures/ab8bafbc-5eef-480a-a3ea-66f89b48fd79.jpg?aki_policy=profile_x_medium"/>
            <div>
              <strong>Jason</strong>
              <div className="text-muted">March 2017</div>
            </div>
          </div>
          <p>
            My wife and I stayed in this apartment, which has one of the best views in all of Hvar Town! We enjoyed wine from the picnic table overlooking the City, and the location is an easy walk down some stairs to the center. The apartment has been updated, and made for a great stay. Thanks!
          </p>
          <div className="review-buttons">
            <div className="spacer"/>
            <button className="btn btn-danger">
              <i className="fa fa-flag"></i><span>Report</span>
            </button>
            <button className="btn btn-danger">
              <i className="fa fa-thumbs-up"></i><span className="border-right">Helpful</span><span>2</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

export default Reviews;
