function initSearchIndex() {
    // this file is built by the Grunt task, and
    $.getJSON('index.json')
      .done(function(documents) {
        pagesIndex = documents;
        searchIndex = lunr(function() {
          this.field('title');
          this.field('categories');
          this.field('content');
          this.ref('href');
  
          // This will add all the documents to the index. This is
          // different compared to older versions of Lunr, where
          // documents could be added after index initialisation
          for (var i = 0; i < documents.length; ++i) {
            this.add(documents[i])
          }
        });
        console.log("Setting up search")
      })
      .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.error('Error getting index file:', err);
      }
    );
  }
  
  initSearchIndex();