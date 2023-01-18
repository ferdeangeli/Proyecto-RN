import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("profile.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists contactData (id integer primary key not null, name text not null, surname text not null, contact text not null, profilePhoto text not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertProfile = (name, surname, contact, profilePhoto) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into contactData (name, surname, contact, profilePhoto) VALUES (?, ?, ?, ?);",
        [name, surname, contact, profilePhoto],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchProfile = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM contactData",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};