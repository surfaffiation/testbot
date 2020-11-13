const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const git = simpleGit();
const FILE_PATH = './data.json';

const makeCommit = (x,y) =>  {
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'y').format();
    const data= {
        date : DATE
    }
    jsonfile.writeFile(FILE_PATH,data, ()=> {
        git.add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();
    });
}

makeCommit(3,3);




