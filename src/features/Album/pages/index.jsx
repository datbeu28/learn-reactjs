import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Viet hom nay nghe gi?',
            imgurl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/a/9/5/aa95fc162da6608382940bb680550bee.jpg'
        },
        {
            id: 2,
            name: 'Nhac Viet day hua hen',
            imgurl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/e/8/0/ae80a917aa93ae3660bb61383941a9a9.jpg'
        },
        {
            id: 3,
            name: 'Pop Viet ngay nay',
            imgurl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/9/8/c/098c58b260c774108f58b5d7d3478631.jpg'
        },
        {
            id: 4,
            name: 'ZINGCHART',
            imgurl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/7/c/9/97c960ac271e94fa47c87a12aa7d3be5.jpg'
        }
    ];

    return (
        <div>
            <h2>Suggest for you</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;