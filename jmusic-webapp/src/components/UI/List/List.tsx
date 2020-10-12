import React, { useEffect } from 'react'

import { Divider, Loading } from '../';

interface ListProps {
  render: (elem: any, ind?: number, arr?: any[]) => any;
  data: any[];
  preload?: () => void;
  loading?: boolean;
}

export const List: React.FC<ListProps> = ({ render, data, preload, loading = false }) => {
  useEffect(() => {
    if (preload) {
      preload();
    }
  }, [preload]);

  return (
    <>
      <Divider />
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {data.map(render)}
        </ul>
      )}
    </>
  );
}
