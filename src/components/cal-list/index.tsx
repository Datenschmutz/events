import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

function WebsiteLink({to, children}: {to: string; children?: ReactNode}) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ItemProps = {
  className?: string;
  name: string;
  children: ReactNode;
  image: string;
  URL: string;
};

function CalendarCard({
  className,
  name,
  children,
  image,
  URL,
}: ItemProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`../img/cal/${image} `}
              alt={`${name}`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {URL && (
              <a className="button button--secondary" target="\_blank" href={URL}>
                Download (ics)
              </a>
            )}
            {URL && (
              <Link className="button button--secondary" onClick={() => {navigator.clipboard.writeText(URL)}}>
                Copy subscription link
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarCardCol(props: ItemProps) {
  return (
    <CalendarCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function CalendarRow(): JSX.Element {
  return (
    <div className="row">
      <CalendarCardCol
        name="Apple Events 🍏"
        image="apple-logo.svg"
        URL="https://ics.datenschmutz.dev/remote.php/dav/public-calendars/ntcsgYYCb2Yctbqe?export">
        <Translate id="apple.card.body">
        Stay up-to-date on all things 🍏 Apple with our calendar of events.
        From product launches to educational sessions, never miss a moment.
        </Translate>
      </CalendarCardCol>
    </div>
  );
}
