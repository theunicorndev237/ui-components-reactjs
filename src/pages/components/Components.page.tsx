import React from "react";

// stylesheet
import styles from "./components.module.css";

// components
import Tabs from "../../components/sitetabs/Tabs.component";
import Tab from "../../components/sitetabs/Tab.component";
import Button from "../../components/buttons/Button.component";

const ComponentsPage = (): JSX.Element => (
  <div className={styles.components}>
    <div className={styles.hero}>
      <h2>UI Components</h2>
    </div>

    <div className={styles.selector}>
      <Tabs>
        <Tab title="Adaptive Buttons">
          <div className={styles.content}>
            <div className={styles.btn__component}>
              <Button type="primary" text="Primary" />
              <Button type="secondary" text="Secondary" />
              <Button type="animated" text="Animated on Hover" />
              <Button type="outlined" text="Outlined" />
              <Button type="rounded" text="Rounded" />
              <Button type="shadowed" text="Shadowed" />
              <Button type="hover" text="Hover Shadow Effect" />
            </div>
            <div className={styles.links}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://gist.github.com/theunicorndev237/8da6e0a72b0db0c2e4ddb6f22af09ac9"
              >
                View Source Code
              </a>
            </div>
          </div>
        </Tab>
        <Tab title="Responsive Cards">
          <div className={styles.content}>
            <h2>Hello Tab Two</h2>
          </div>
        </Tab>
        <Tab title="Footer Components">
          <div className={styles.content}>
            <h2>Hello Tab Three</h2>
          </div>
        </Tab>
        <Tab title="Navigation Components">
          <div className={styles.content}>
            <h2>Hello Tab Three</h2>
          </div>
        </Tab>
        <Tab title="Modals">
          <div className={styles.content}>
            <h2>Hello Tab Three</h2>
          </div>
        </Tab>
        <Tab title="Just Another">
          <div className={styles.content}>
            <h2>Hello Tab Three</h2>
          </div>
        </Tab>
      </Tabs>
    </div>

    {/* <div className={styles.grid__layout}>
      <div className={styles.tabs}>
        <div className={styles.headline}>
          <h2>
            Tabs Switching
            {` > `}
            Demo
          </h2>
        </div>
        <div>
          <Tabs>
            <Tab title="Tab One">
              <div className={styles.content}>
                <h2>Hello Tab One</h2>
              </div>
            </Tab>
            <Tab title="Tab Two">
              <div className={styles.content}>
                <h2>Hello Tab Two</h2>
              </div>
            </Tab>
            <Tab title="Tab Three">
              <div className={styles.content}>
                <h2>Hello Tab Three</h2>
              </div>
            </Tab>
          </Tabs>
          <div className={styles.links}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://gist.github.com/theunicorndev237/8da6e0a72b0db0c2e4ddb6f22af09ac9"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={styles.headline}>
          <h2>
            Button Components
            {` > `}
            Demo
          </h2>
        </div>
        <div className={styles.btn__component}>
          <Button type="primary" text="Primary" />
          <Button type="secondary" text="Secondary" />
          <Button type="animated" text="Animated on Hover" />
          <Button type="outlined" text="Outlined" />
          <Button type="rounded" text="Rounded" />
          <Button type="shadowed" text="Shadowed" />
          <Button type="hover" text="Hover Shadow Effect" />
        </div>
        <div className={styles.links}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://gist.github.com/theunicorndev237/53a733409d904ad75e93ab41e3e73cb0"
          >
            View Source Code
          </a>
        </div>
        ;
      </div>
    </div> */}
  </div>
);

export default ComponentsPage;
