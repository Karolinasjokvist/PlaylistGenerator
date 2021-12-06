README

The goal of this project is the creation of a playlist generator that will be used to create playlists for the user based on their preferred genre of music. When the user first enters the application, they can choose between the options “explore”, “generate playlist” and “my playlist”. 

• The option “explore” will let the user explore the world of music where they can pick a genre or an artist and see songs based on their choices. The user can also choose to read up on the artist or the song in this view 

• The option “generate a playlist” will generate a playlist based on the kind of music the user likes. It first lets the user pick between different music genres, letting the user distribute a 100% between a variety of genres (Example: 40% classic pop music and 60% pop rock). The user can then choose one or more favorite artists so some of their songs or songs that are similar to theirs can be added to the playlist. 

• The option “my playlist” lets the user see their previous playlists in a list. Every time a playlist is saved the user gets the option to name it (with the default names playlist 1, playlist 2… etc.) and these names are what is shown in the list. 

The user is going to be able to listen to 30 second previews of the songs, but not the full playlist. This is in part because of limitations of the API and in part because of how the function of the app is to create a playlist, not to play it.


WHAT WE HAVE DONE

So far, the group has created all of the view files, although not all of them are finished. The files were created for the group to keep track of how much work there was to do. Additionally the group created a Trello room to go along with these view  files, thus making it easier to keep track of the things that have been done as well as the things that need doing. The group has also created css files and presenter files for the view files that have been edited.

The project currently shows data from an API call in the explore option when the user picks a genre. This will result in a call that brings back 50 artists of that genre for the user to explore.


WHAT WE PLAN TO DO

We plan to finish the remaining files for the project. This includes finishing the final view files, and with them their individual css- and presenter files. As of now, the application only has the basic framework code with a simple layout. Some features are still missing, but these will be added in future stages of the project.




PROJECT FILE STRUCTURE

CSS

All of the files in the folder css are css files made to describe the presentation of the app by deciding colors, fonts and other design elements.The files are called on by the files in the view folder.


PRESENTERS

All of the presenter files in the folder presenters are created after their respective view file has been created. Their purpose is to get and set information to and from their respective view and serve as a go-between for the views and playlistModel.js.


VIEWS

All of the view files in the view folder each have their own role to show one of the pages of the application, for example the explore page.


GENRES
This file is for generating the different genres of music when the user is supposed to choose for the playlist generation. The group has considered moving the code that currently exist in genres into Model


MODEL
The code in the model file is for initializing the different functions on the site such as when the user adds a genre to a playlist.

