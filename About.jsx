import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react'; 
import '../App.css';
import Drawer from './AboutDrawer'


const style = {
  margin: 15,
 };

class About extends React.Component {

    render(){
        return(
            <div class="wrap2">
            <MuiThemeProvider>
              <div>
                
                
                <Drawer/>
                <p class="text-center">
                <p class="h1">About us</p>
                </p>
                <div>
                <p class="text-center">
                <p class="lead">
                This website was assembled by a group of student developers.
                </p>
                <p class="lead">
                This following is a short set of bios about each one of us.
                </p>
                </p>
                <div>
                  <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                            <p class="h3">Jarrett Mayo</p>
                             <p>
                             Jarrett is a computer science student at Ualbany. He is currently in his senior
                             and has created several projects in his time at the school including making
                             a game of battleship, coding a binary search tree, coding both a Primms and 
                             Kruskals algorithm, and is currently in the middle of developing this site, and 
                             a password manager app, his two biggest projects yet.</p></div>
                             
                            
                            </div>
                           </div>
                        </div>
                    </div>
                 </p>
                 <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                             <p class="h3">Emmanuel Lee</p>
                             <p>
                             As an entry level software developer I aspire to build the set of skills necessary 
                             to develop highly intelligent pieces of technology. 
                             Technology that not only makes life easier, but sheds light on what is possible
                             through dedication and hard work. Working to develop this site has taught me much 
                             about the inner workings of web development and my interest can only grow from this point on.
                             Developing this site has been a fun and rewarding experience and 
                             I hope to learn more as I continue my journey as a software developer working
                             for a highly involved tech company.
                            </p>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                 </p>
                 <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                             <p class="h3">Jane Hu</p>
                             <p>
                             Jane is a computer science major studying at University at Albany. 
                             She has build several projects including battleship, minesweeper, and a drone, 
                             can program in all forms of languages, particularly Java and C, 
                             and is currently managing this amazing project.
                            </p>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                 </p>
                 <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                             <p class="h3">Alandale Lauron</p>
                             <p>
                             Alandale is a computer science major at UAlbany. 
                             He has deployed database projects using ASP.NET. 
                             He is also currently working on a medicine manager phone application. 
                             He has proficiency in Java, and C#.
                            </p>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                 </p>
                 <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                             <p class="h3">Cheetah Louis</p>
                             <p>
                             Cheetah is a computer science major studying at UAlbany. 
                             Cheetah is currently working on a app that helps you find a partner for the gym. 
                             He is most proficient in Java and C.
                            </p>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                 </p> 
                 <p class="text-center">
                    <div className="MyApp">
                        <div class="container">
                            <div class="row">
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             </div>
                             <div class="form-group col-md-12">
                             <div class="p-3 mb-2 bg-secondary text-light">
                             <p class="h3">Ye Min Htet</p>
                             <p>
                             Ye Min Htet is studying computer science at Ualbany.
                             He has learned a lot from the courses there and is
                             currently working on the Software Engineering project
                            </p>
                            </div>
                            </div>
                           </div>
                        </div>
                    </div>
                 </p>                           
                </div>
            </div>    
            </div>
            </MuiThemeProvider>
            </div>
          
        );
    }
}


export default About;