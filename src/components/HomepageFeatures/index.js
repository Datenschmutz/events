import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate description="Homepage left text section Title">Work in progress</Translate>,
    Svg: require('@site/static/img/work-in-progress.svg').default,
    description: (
      <Translate description="Homepage left text section conent">
        We are just getting started with this website. 
        So not yet everything is in place right now. We are working on it.
      </Translate>
    ),
  },
  {
    title: <Translate description="Homepage middle text section Title">You are looking for a Calendar?</Translate>,
    Svg: require('@site/static/img/box-calendar.svg').default,
    description: (
      <Translate description="Homepage middle text section Title">
        Well then we hope you find it here! If not and you think it would fit well in here, create a GitHub Issue. If we like it we will take care of it.
      </Translate>
    ),
  },
  {
    title: <Translate description="Homepage right text section Title">Up to date</Translate>,
    Svg: require('@site/static/img/up-to-date.svg').default,
    description: (
      <Translate id="Homepage.right.txt.cont" description="Homepage right text section conent">
          We do our best to keep the calendars as up to date as possible but if you find a wrong schedule please open a github issue.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
