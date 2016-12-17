require 'nokogiri'

module ApplicationHelper
  def content_type_for_relay(relay)
    case relay['audioFormat']
    when 'mp3'
      'audio/mpeg'
    when 'aac+'
      'audio/aacp'
    end
  end

  def svg_image_tag(filename, options = {})
    svg = markup_for_svg_image_file(filename).at_css 'svg'
    # Ensure preserveAspectRatio is always set so that SVGs align to top left.
    svg['preserveAspectRatio'] = 'xMinYMin'

    %w(xmlns xmlns:xlink xml:space width height style version).each { |attribute| svg.delete attribute }

    if options[:class]
      if svg['class'].present?
        svg['class'] << " #{options[:class]}"
      else
        svg['class'] = options[:class]
      end
    end

    svg.to_html.html_safe
  end

private

  def svg_image_file(filename)
    File.read Rails.root.join('app', 'assets', 'images', filename)
  end

  def markup_for_svg_image_file(filename)
    Nokogiri::HTML::DocumentFragment.parse(svg_image_file(filename))
  end

end
