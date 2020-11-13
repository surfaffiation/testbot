const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const git = simpleGit();
const FILE_PATH = './data.json';

const makeCommit = n =>  {

    if(n===0) return git.push();

    const x = random.int(0,54);
    const y = random.int(0,6);

    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
    const data= {
        date : DATE
    }

    console.log(DATE)

    jsonfile.writeFile(FILE_PATH,data, ()=> {
        git.add([FILE_PATH]).commit(DATE,{'--date':DATE},makeCommit.bind(this,--n))
    });
}

makeCommit(100);




