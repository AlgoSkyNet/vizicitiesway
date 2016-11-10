#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#' @param location numeric vector of latitude/longitude (in that order)
#' coordinates for the initial starting position of the map. If null, the map
#'  will default to Melbourne, Australia.
#' @param mapControls logical indicating if the map can be controlled.
#' @param buildings logical indicating if 3D buildings should be rendered on
#' the map
#' @export
vizicitiesway <- function(location = NULL, mapControls = TRUE, buildings = TRUE,
													sun = FALSE, width = NULL, height = NULL,
													elementId = NULL) {


	if(is.null(location))
		location <- c(-37.9, 144.5)  ## Melbourne, Australia

	if(!is.logical(mapControls))
		stop("mapControls must be either TRUE or FALSE")

	if(!is.logical(buildings))
		stop("mapControls must be either TRUE or FALSE")

  # forward options using x
  x = list(
  	lat = location[1],
  	lng = location[2],
  	mapControls = mapControls,
  	addBuildings = buildings,
  	sun = sun
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'vizicitiesway',
    x,
    width = width,
    height = height,
    package = 'vizicitiesway',
    elementId = elementId
  )
}

#' Shiny bindings for vizicitiesway
#'
#' Output and render functions for using vizicitiesway within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a vizicitiesway
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name vizicitiesway-shiny
#'
#' @export
vizicitieswayOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'vizicitiesway', width, height, package = 'vizicitiesway')
}

#' @rdname vizicitiesway-shiny
#' @export
renderVizicitiesway <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, vizicitieswayOutput, env, quoted = TRUE)
}
