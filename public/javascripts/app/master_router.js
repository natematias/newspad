/* Newspad ver. 1
Copyright (c) Microsoft Corporation
All rights reserved. 
Licensed under the Apache License, Version 2.0 (the ""License""); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT. 
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
*/

var MasterRouter = Backbone.Router.extend({

    routes: {
        "note/:note_id": "note_link"
    },

    note_link: function(note_id){
      read_view.show_improvement_dialogue(note_id);
    }
});

router = new MasterRouter();
Backbone.history.start();
