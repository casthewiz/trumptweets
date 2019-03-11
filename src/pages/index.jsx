import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Layout from '../components/Layout';
import BeTheHero from '../images/be_the_hero.svg';
import DataReport from '../images/data_report.svg';
import MayTheForce from '../images/may_the_force.svg';
import Trump from '../images/trump.svg'
const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  .kanye-rest {
    font-family: ${props => props.theme.fontFamily.kanye};
    font-weight: bold;
  }
  .trump-twitter-archive {
    font-family: ${props => props.theme.fontFamily.archive};
    font-weight: bold;
  }
  .hero-img {
    width: 300px;
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const Sample = styled(Wrapper)`
  margin: 0 auto;
`;

const IndexPage = ({}) => (
  <Layout>
    <Header>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <img class="hero-img" src={Trump} alt="Trump tweets served simply."/>
        <h2>
          A yuge endpoint for random @realDonaldTrump tweets.
        </h2>
        <h3>Sourced from:
          <br/>
          <a class='trump-twitter-archive' href="http://www.trumptwitterarchive.com">
            Trump Twitter Archive
          </a>
        </h3>
        <h3>Inspired by:
          <a class='kanye-rest' href="http://kanye.rest">
            &nbsp;kanye.rest
          </a>
        </h3>
      </Hero>
    </Header>
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h3><a href="github.com/casthewiz">github.com/casthewiz</a></h3>
    </Contact>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {

};
