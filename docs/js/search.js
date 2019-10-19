function initSearchIndex(searchFile) {
    // this file is built by the Grunt task, and
    $.getJSON(searchFile)
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

// this function will parse the query_string, which will you
// to run queries like "title:lunr" (search the title field),
// "lunr^10" (boost hits with this term by a factor 10) or
// "lunr~2" (will match anything within an edit distance of 2,
// i.e. "losr" will also match)
function simpleSearchSite(query_string) {
    return searchIndex.search(query_string).map(function(result) {
        return pagesIndex.filter(function(page) {
            return page.href === result.ref;
        })[0];
    });
}

// I want a typeahead search, so if a user types a query like
// "pyth", it should show results that contain the word "Python",
// rather than just the entire word.
function searchSite(query_string) {
    return searchIndex.query(function(q) {
        // look for an exact match and give that a massive positive boost
        q.term(query_string, { usePipeline: true, boost: 100 });
        // prefix matches should not use stemming, and lower positive boost
        q.term(query_string, { usePipeline: false, boost: 10, wildcard: lunr.Query.wildcard.TRAILING });
    }).map(function(result) {
        return pagesIndex.filter(function(page) {
        return page.href === result.ref;
        })[0];
    });
}