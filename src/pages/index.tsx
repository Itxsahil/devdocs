import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TerminalHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalTitle}>root@devdocs:~#</span>
          </div>
          <div className={styles.terminalBody}>
            <p className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> cat /etc/motd
            </p>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
            <p className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> echo &quot;why does this site exist?&quot;
            </p>
            <p className={styles.terminalOutput}>
              {"because the docs are either outdated, wrong, or buried under 47\nMedium paywalls."}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--secondary button--lg', styles.ctaButton)}
                to="/docs/intro">
                read the docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {"$ why did i build this?"}
        </Heading>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <p className={styles.whyCommand}>
              <span className={styles.comment}>{"# short answer"}</span>
            </p>
            <p className={styles.whyText}>
              {"i got tired of googling the same "}
              <code>docker-compose</code>
              {" syntax for the 400th time. so i started writing things down. then i realized other people might benefit from my suffering too."}
            </p>
          </div>
          <div className={styles.whyCard}>
            <p className={styles.whyCommand}>
              <span className={styles.comment}>{"# the real answer"}</span>
            </p>
            <p className={styles.whyText}>
              {"every time i learn something about linux, networking, containers, or CI/CD -- i forget it in 2 weeks. this site is my external memory. it\u2019s a "}
              <code>man</code>
              {" page for the stuff nobody writes "}
              <code>man</code>
              {" pages for."}
            </p>
          </div>
          <div className={styles.whyCard}>
            <p className={styles.whyCommand}>
              <span className={styles.comment}>{"# what you\u2019ll find here"}</span>
            </p>
            <p className={styles.whyText}>
              {"no fluff. no \u201ctop 10 things\u201d listicles. just real configs, real commands, and real war stories from production. if it helped me at 3am during an incident, it\u2019s going in here."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConversationSection() {
  return (
    <section className={styles.conversationSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {"$ cat /var/log/dev-arguments.log"}
        </Heading>
        <div className={styles.chatLog}>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>senior_dev</span>
            <span className={styles.chatTime}>09:42:11</span>
            <p className={styles.chatMsg}>
              {"\u201cjust use a VM, it\u2019s simpler\u201d"}
            </p>
          </div>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>junior_ops</span>
            <span className={styles.chatTime}>09:42:33</span>
            <p className={styles.chatMsg}>
              {"\u201cdocker is just a VM with extra steps\u201d"}
            </p>
          </div>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>that_one_dba</span>
            <span className={styles.chatTime}>09:43:01</span>
            <p className={styles.chatMsg}>
              {"\u201ci\u2019ll just add another column to the users table\u201d"}
            </p>
          </div>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>devops_intern</span>
            <span className={styles.chatTime}>09:43:15</span>
            <p className={styles.chatMsg}>
              {"\u201cworks on my machine \u00af\\_(\u30c4)_/\u00af\u201d"}
            </p>
          </div>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>sre_lead</span>
            <span className={styles.chatTime}>09:44:02</span>
            <p className={styles.chatMsg}>
              {"\u201cthe docs say to run "}
              <code>kubectl apply -f</code>
              {" but don\u2019t mention which namespace. classic.\u201d"}
            </p>
          </div>
          <div className={styles.chatEntry}>
            <span className={styles.chatUser}>you</span>
            <span className={styles.chatTime}>09:44:30</span>
            <p className={styles.chatMsg}>
              {"\u201cthat\u2019s literally why i built this site\u201d"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {"$ man devdocs"}
        </Heading>
        <div className={styles.manPage}>
          <p className={styles.manHeader}>
            <strong>DEVDOCS(1)</strong>{"     "}<strong>User Commands</strong>{"     "}<strong>DEVDOCS(1)</strong>
          </p>
          <p className={styles.manName}>
            <strong>NAME</strong><br />
            {"devdocs \u2014 a curated collection of linux, docker, devops, and development knowledge"}
          </p>
          <p className={styles.manName}>
            <strong>SYNOPSIS</strong><br />
            {"browse the docs. copy the commands. fix your stuff."}
          </p>
          <p className={styles.manName}>
            <strong>DESCRIPTION</strong><br />
            {"this site contains practical, no-nonsense documentation for sysadmins, developers, and anyone who has ever said \u201cit works on my machine.\u201d topics include linux internals, docker workflows, CI/CD pipelines, and the occasional rage-quit-worthy debugging session."}
          </p>
          <p className={styles.manName}>
            <strong>EXAMPLES</strong>
          </p>
          <pre className={styles.manCode}>
            {`$ docker run -d --name postgres \\
    -e POSTGRES_PASSWORD=secret \\
    -v pgdata:/var/lib/postgresql/data \\
    postgres:16-alpine

# don't do this in production. or do. i'm not your boss.`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="home"
      description="practical docs for linux, docker, devops, and development">
      <TerminalHero />
      <main>
        <WhySection />
        <ConversationSection />
        <HomepageFeatures />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
