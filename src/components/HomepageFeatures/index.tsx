import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Linux',
    icon: '>_',
    description: (
      <>
        {"from "}
        <code>chmod</code>
        {" to cgroups, from "}
        <code>grep</code>
        {" to systemd services. the stuff you google at 2am when production is on fire and the senior engineer is offline."}
      </>
    ),
  },
  {
    title: 'Docker',
    icon: '\u2699',
    description: (
      <>
        {"dockerfiles that actually work. compose setups that don\u2019t break on monday morning. networking explained without the headaches. and yes, we\u2019ll talk about why "}
        <code>docker system prune</code>
        {" feels like a crime."}
      </>
    ),
  },
  {
    title: 'DevOps',
    icon: '\u27F3',
    description: (
      <>
        {"CI/CD pipelines, infrastructure as code, monitoring, alerting, and the art of pretending your deployments are \u201cplanned maintenance.\u201d because if it\u2019s documented, it didn\u2019t happen."}
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {"$ ls /etc/topics/"}
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
