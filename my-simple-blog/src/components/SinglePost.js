import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postByIdSelector } from '../store/posts';

function SinglePost({ getPostById, match }) {
  const { id } = match.params;

  const post = getPostById(id);

  return post ? (
    <div>
      <h2>{ post.title } </h2>
      <p>{ post.body }</p>
    </div>
  ) : (
    <Redirect to="/not-found" />
  );
}

function mapStateToProps(state) {
  return {
    getPostById: postByIdSelector(state)
  };
}

export default connect(mapStateToProps)(SinglePost);
