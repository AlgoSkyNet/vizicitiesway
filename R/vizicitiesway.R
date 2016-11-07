#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
vizicitiesway <- function(width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    message = c(40.739940, -73.988801)
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
