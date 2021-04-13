/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import {Row, Col, Jumbotron,} from 'reactstrap';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/helpers';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <Row className='flex-row header-section' >
          <Col xs='12' lg='12' md='12'>
            <Jumbotron className='text-center bg-transparent'>
              <h1 className='display-4'>DEVIL_ARTZ</h1>
              <h2>The Biggest & largest Marketplace for NFT Selling.</h2>
              <p>The biggest place to buy, sell, and discover rare item as a Digitally way.</p>
              <Link to='/' className='btn btn-primary text-white mr-2'>
                Explore More
              </Link>
              <Link to='/' className='btn btn-outline-primary'>
                Create One
              </Link>
              {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#C4FCEF" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,170.7C320,181,400,235,480,240C560,245,640,203,720,197.3C800,192,880,224,960,240C1040,256,1120,256,1200,256C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>*/}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,85.3C320,85,400,107,480,128C560,149,640,171,720,160C800,149,880,107,960,117.3C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </Jumbotron>
          </Col>
        </Row>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-5.jpg' />
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-6.jpg' />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
