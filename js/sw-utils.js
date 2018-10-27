// Guardar en el cache dinamico

function actualizaCacheDinamico ( dynamicCache, req, res ) {

  if ( res.ok ) {
    return caches.open( DYNAMIC_CACHE).then( cache => {
      cache.put( req, res.clone() );
      return res.clone();
    });

  } else {
    return res;
  }

}
