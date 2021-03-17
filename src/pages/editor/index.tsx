import React from 'react';
import Head from 'next/head';

import Editor from '@modules/editor/components/Editor';

const EditorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Editor</title>

        <script src="/teall/three.js" />
        <script src="/teall/cannon.js" />
        <script src="/teall/teal.js" />
        <script src="/teall/dice.js" />
      </Head>

      <Editor />
    </>
  );
};

export default EditorPage;
