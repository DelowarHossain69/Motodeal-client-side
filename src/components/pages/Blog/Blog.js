import React from "react";

const Blog = () => {
  return (
    <section className="container mx-auto row my-5 g-5">
      <div className="col-12 col-md-6">
        <h4>Different between js and node js.</h4>
        <p>
          Javascript is a programming language, which runs in web browsers. Javascript is interpreted, object-oriented language.
        </p>
        <p>
          NodeJS is a Javascript runtime environment. Node js is a interpreter
          runtime language.
        </p>
      </div>

      <div className="col-12 col-md-6">
        <h4>When should use node js and mongodb.</h4>
        <p>
          Node. js is primarily used for non-blocking, event-driven servers.
          It's used for traditional web sites and back-end API services.
        </p>
        <p>
          when you need to accommodate massive scale, when you are rapidly
          prototyping, and a few other use cases then you have to use mongodb.
        </p>
      </div>

      <div className="col-12 col-md-6">
        <h4>SQL vs NoSQL.</h4>
        <p>
          SQL Databases : SQL Databases. Developed in the 1970s. this is
          Typically required. SQL is the programming language used to interface with relational databases.
        </p>
        <p>
          NoSQL Databases : Document: JSON documents, Key-value: key-value
          pairs, Wide-column: tables with rows and dynamic columns. This is
          Typically not required.
        </p>
      </div>
      <div className="col-12 col-md-6">
        <h4>What is JWT?</h4>

        <p>
          JWTs can be signed using a secret or a public/private key pair using
          RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy
          between parties
        </p>

        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
        </p>
      </div>
    </section>
  );
};

export default Blog;
