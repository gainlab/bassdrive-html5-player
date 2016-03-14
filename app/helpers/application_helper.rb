module ApplicationHelper
  def content_type_for_relay(relay)
    case relay['audioFormat']
    when 'mp3'
      'audio/mpeg'
    when 'aac+'
      'audio/aacp'
    end
  end
end
