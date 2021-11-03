import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { XRow } from '../../../../components/x-row';
import { XColumn } from '../../../../components/x-column';
import css from './index.module.css';

import { ThoughtsList } from '../../../thoughts/views/thoughts-list';

export const Dashboard: React.FC<IDashboard> = (props) => {
  return (
    <XColumn className={css.dashboard}>
      <XRow className={css.dashboard_body} grow={1} justify={"center"}>
        <ThoughtsList />
      </XRow>
    </XColumn>
  );
};

export interface IDashboard extends RouteComponentProps {
  className?: string;
}